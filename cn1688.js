
const cn1688SiteObj = function () {
    var self = this;
    self.host = window.location.host;
    self.stepMore = 0
    self.linkOrder = "https://trade.1688.com/order/buyer_order_list.htm"
    self.linkMvd = "https://trade.1688.com/order/buyer_order_list.htm?spm=a360q.8274423.0.0.694a4c9alstuVL&scene_type=&source=&trade_status=waitsellersend#waitsellersend"
    self.isValidRenderMain = () => {
        return true
    }

    self.renderMapOrderBtn = () => {
        const runFunc = () => {
            $.get(chrome.runtime.getURL("buttonMapOrder.html"), html => {
                html = html.replaceAll("{{background_trunk}}", chrome.runtime.getURL("themify/truck-solid.svg"));
                html = html.replaceAll("{{background_send}}", chrome.runtime.getURL("themify/paper-plane-solid.svg"));
                html = html.replaceAll("{{platform_style}}", "width: 100%; display: block;");
                const orderIds = []
                $.each($("li.order-item"), (index, element) => {
                    let orderId = $(element).find(".title.order-title .order-id").text()
                    console.log(orderId);
                    orderId = _.trim(_.last(_.split(orderId, "：")))
                    if (orderId) {
                        orderIds.push(orderId)
                    }
                });

                viExt.getOrders(orderIds).then(res => {
                    const orders = _.get(res, "orders", [])
                    $.each($("li.order-item"), (index, element) => {
                        let orderId = $(element).find(".title.order-title .order-id").text()
                        orderId = _.trim(_.last(_.split(orderId, "：")))
                        const orderExits = _.find(orders, order => order.money_contract === orderId)
                        const hasLadingCode = _.get(orderExits, "lading_code", "") && !_.get(orderExits, "lading_code", "").includes($(".account-id a").text())
                        let thisHtml = _.clone(html)
                        let btnTxt = "Khớp đơn"
                        let disableState = ""
                        if (orderExits) {
                            btnTxt = "Khớp MVĐ"
                        }
                        if (hasLadingCode) {
                            btnTxt = "Đơn đã khớp thành công"
                            disableState = "disabled='disabled'"
                        }
                        thisHtml = thisHtml.replaceAll("{{button_text}}", btnTxt);
                        thisHtml = thisHtml.replaceAll("{{disable_state}}", disableState);
                        if (!$(element).find(".ext-mapping-order").length) {
                            $(element).find((".order-subtitle")).append(thisHtml)
                        }

                    });
                })
            })
        }
        setInterval(() => {
            runFunc()
        }, 20000)
        runFunc()
    }

    self.handleOpenOrderDetail = (e) => {
        let orderId = $(e.target).parents("li.order-item").find(".title.order-title .order-id").text()
        orderId = _.trim(_.last(_.split(orderId, "：")))
        console.log(orderId);
        var win = window.open(`https://trade.1688.com/order/new_step_order_detail.htm?orderId=${orderId}&ext_map=order`, '_blank');
        if (win) {
            win.focus();
        } else {
            alert('Please allow popups for this website');
        }
    }

    self.handleMapOrder = async () => {
        const s = new URLSearchParams(window.location.search)
        const orderId = s.get("orderId")
        const fullName = $('span:contains("收货人："):not(:has(*))').first().next().text() || ""
        if (!fullName) {
            alert("Không nhận diện được địa chỉ")
            return
        }
        let myOrderId = _.head((_.head(fullName.match(/(- \d+ -)|(-\d+-)|(- \d+-)|(-\d+ -)/gmi)) || "").match(/\d+/gmi))
        if (viExt.IS_TEST) {
            myOrderId = "5"
        }
        let lading_code = $('th:contains("运单号码："):not(:has(*))').first().next().text() || ""
        if (!lading_code.match(/\d+/gmi)) {
            lading_code = ""
        }
        if (String(parseInt(myOrderId)) === myOrderId && myOrderId) {
            const orderData = await viExt.getOrderById(myOrderId).catch(e => {
                alert("Không tìm thấy đơn #1")
                console.log('e: ', e);
            })
            if (!_.get(orderData, ["order", "id"])) {
                alert("Không tìm thấy đơn #2")
                return
            } else {
                return viExt.mapOrderById(myOrderId, orderId, _.trim(lading_code)).then(res => {
                    return viExt.renderMappingSuccess()
                }).catch((e) => {
                    alert("Không tìm thấy đơn #3")
                    console.log('e: ', e);
                })
            }
        } else {
            alert("Không tìm thấy mã đơn trong địa chỉ giao hàng")
        }
    }

    self.handleGetDataPaymentRequest = (e) => {
        const contract = $(e.target).parents('.order-item').find('.tradeId').val();
        const money = $(e.target).parents('.order-detail').find('.total').attr('title');
        const buyer = $(e.target).parents('.order-detail').find('.text-aux').text();
        const note = $(e.target).parents('.order-detail').find('.ext_input').val();

        if (typeof money == 'undefined' || typeof buyer == 'undefined' || typeof contract == 'undefined') {
            alert('Có lỗi, mời bạn liên hệ cskh để báo lỗi không gửi được yêu cầu, cám ơn bạn');
            return;
        }

        const data = { "money": money, "buyer": buyer, "contract": contract, "taobao_1688": 1, "note": note };
        return viExt.handlePaymentRequest(data).then(res => {
            $(e.target).text("Tạo yêu cầu thành công");
            $(e.target).css("background-color", "#469408");
            $(e.target).css("border", "solid 1px #ff6000");

        }).catch(err => {
            $(e.target).prop('disabled', true).text("Yêu cầu đã tồn tại");
        })
    }
};

const targetSite = new cn1688SiteObj();