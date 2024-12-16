const extensionInit = async () => {
    jQuery.expr[':'].regex = function(elem, index, match) {
        var matchParams = match[3].split(','),
            validLabels = /^(data|css):/,
            attr = {
                method: matchParams[0].match(validLabels) ? 
                            matchParams[0].split(':')[0] : 'attr',
                property: matchParams.shift().replace(validLabels,'')
            },
            regexFlags = 'ig',
            regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
        return regex.test(jQuery(elem)[attr.method](attr.property));
    }

    viExt.injectScript()
        .getToken()
        .then(async ext => {
            $('body').attr('gl_token_tbe', ext.token);
            if (typeof targetSite === "undefined") {
                return
            }
            if (typeof targetSite.renderFormCreate === "function") {
                targetSite.renderFormCreate()
            }
            if (typeof targetSite.listenerCreateSuccess === "function") {
                targetSite.listenerCreateSuccess()
            }
            if (typeof targetSite.renderMapOrderBtn === "function") {
                targetSite.renderMapOrderBtn()
            }
            if (typeof targetSite.isValidMapOrder === "function" && targetSite.isValidMapOrder()) {
                if (typeof targetSite.handleMapOrder === "function") {
                    targetSite.handleMapOrder()
                }
            }
            if (typeof targetSite.renderRequestPayment === "function") {
                targetSite.renderRequestPayment()
            }

        })
}
$(document).ready(function () {
    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            console.log(cookiePair[0].trim());
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }
    getCookie('info');
    console.log($('body').children('#listBox'));
    // $('body').children('#listBox').addClass('abc');
    // extensionInit();
});