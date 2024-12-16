function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
/**
 * Commmon functions
 */
const viEx1688Obj = function () {
    const self = this;
    self.IS_TEST = false;
    self.baseUrl = self.IS_TEST ? "http://127.0.0.1:8000" : "https://api.xadal.com";
    self.apiUrl = self.baseUrl + "/api/partner"
    self.getOrderUrl = "/request_payment/bulk-create"
    self.token = null;
    self.extensionID = chrome.runtime.id;
    self.info= getCookie('info');
    $(document).on("click", "#ext-tool-menu-button", (e) => self.showOrHideToolMenuTalbe());
    $(document).on("click", "#ext-tool-menu-close-btn", (e) => self.showOrHideToolMenuTalbe());
    $(document).on("click", "#ext-btn-create-order", (e) => targetSite.handleCreate(e));
    $(document).on("click", ".ext-mapping-order", (e) => targetSite.handleOpenOrderDetail(e));
    $(document).on("click", ".ext_send_request", (e) => targetSite.handleGetDataPaymentRequest(e));
    $(document).on("change", "#txt-auto-map", (e) => self.handleChangeCheckboxAutomap(e));

    
    
    self.injectScript = () => {
        const script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        // script.setAttribute('src', chrome.runtime.getURL('injection/retrieve-window-variables.js'));
        document.getElementsByTagName("body")[0].appendChild(script);
        return self
    }

    self.getToken = async () => {
        return new Promise((resolver, reject) => {
            try {
                resolver($("body").attr("tmp_extJwtToken"))
            } catch (error) {
                resolver(null)
            }
        }).then(extJwtToken => {
            if (extJwtToken) {
                return chrome.storage.local.set({ token: extJwtToken }).then(() => {
                    self.token = extJwtToken
                    return self
                })
            }
            return self;
        })
        
    };
    self.removeToolMenu = () => $("#ext-tool-menu").remove()
    


    self.render = () => {
        $.get(chrome.runtime.getURL("template/toolMenu.html"), html => {
            // chrome.storage.local.get(["donggo"]).then(data => {
            self.removeFormPopup()
            html = html.replaceAll("{{background_logo}}", chrome.runtime.getURL("images/logo.png"));
            html = html.replaceAll("{{background_close}}", chrome.runtime.getURL("themify/x-solid.svg"));
            html = html.replaceAll("{{background_help}}", chrome.runtime.getURL("themify/circle-info-solid.svg"));
            html = html.replaceAll("{{background_setting}}", chrome.runtime.getURL("themify/gear-solid.svg"));
            html = html.replaceAll("{{register_link}}", self.baseUrl + self.registerUrl)
            // html = html.replaceAll("{{donggo_checked}}", _.get(data, "donggo", false) ? "checked" : "")
            html = html.replaceAll(`{{helper_step_alert_active}}`, `helper-step-alert-${targetSite.activeStep(true)}`)
            html = html.replaceAll(`{{helper_step_active}}`, `helper-step-${targetSite.activeStep()}`)
            html = html.replaceAll("{{link_order}}", targetSite.linkOrder)
            html = html.replaceAll("{{link_mvd}}", targetSite.linkMvd)

            // var html = $.parseHTML(data);
            $("body").append(html);
            // })
        });
    }
    self.renderStep = () => {
        $("#ext-tool-menu").removeClass();
        $("#ext-tool-menu").addClass(`helper-step-alert-${targetSite.activeStep()}`);
        $("#ext-tool-menu").addClass(`helper-step-${targetSite.activeStep()}`);
    }
    self.showOrHideToolMenuTalbe = () => {
        if ($("#ext-tool-menu-table").is(":visible")) {
            $("#ext-tool-menu-table").hide()
            $(".helper-step-alert.active").attr('style', null);
        } else {
            $("#ext-tool-menu-table").show()
            $(".helper-step-alert.active").attr('style', 'display:none !important');
        }
    }
    self.hideToolMenuTalbe = () => {
        $("#ext-tool-menu-table").hide()
    }

    self.autoFillValue = (value, selector) => {
        const inputValue = (element, value) => {
            let lastValue = element.value
            element.value = value
            let event = new Event('change', { target: element, bubbles: true })
            //tracker is a hack to force React to handle change event
            let tracker = element._valueTracker
            if (tracker) {
                tracker.setValue(lastValue)
            }
            element.dispatchEvent(event)
        }
        const input = document.querySelector(selector)
        if (input) {
            inputValue(input, value)
        }
    }

    self.renderMappingSuccess = () => {
        $.get(chrome.runtime.getURL("template/success.html"), html => {
            html = html.replaceAll("{{background_close}}", chrome.runtime.getURL("themify/x-solid.svg"));
            html = html.replaceAll("{{coundown_secon}}}", 5);
            
            $("body").append(html);
            let secon = 5
            setInterval(() => {
                if (secon < 0) {
                    window.close()
                }
                $("#ext-countdown").text(secon)
                secon = secon - 1;
            }, 1000)
        });
    }

    self.handlePaymentRequest = async (requestData) => {
      
        return new Promise((resolver, reject) => {
            $.ajax({
                type: "POST",
                url: self.apiUrl + self.getOrderUrl,
                headers: {
                    "Authorization": "Bearer " + self.info.token,
                },
                data: requestData, // serializes the form's elements.
                success: data => {
                    if (!_.get(data, "error")) {
                        resolver(data)
                    } else {
                        reject(_.get(data, "message"))
                    }
                },
                error: data => {
                    const msg = _.get(data, ["responseJSON", "message"], "")
                    reject(msg)
                }
            });
        });
    }

    self.handleChangeCheckboxAutomap = async (event) => {
        const elm = $(event.target)
        chrome.storage.local.set({ auto_map: elm.is(":checked") })
    }
    
};

const viExt = new viEx1688Obj();