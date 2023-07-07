// ChangeFontSize_byEquipment
function CFS_bE(phone, pad, pc) {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        document.documentElement.style.fontSize = phone+'px';
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = pad+'px';
    } else {
        document.documentElement.style.fontSize = pc+'px';
    }
}

//构造ele在onmouseenter下和onmouseleave下的ele背景颜色
function EleHover(e, enterStyle, leaveStyle) {
    e.addEventListener("mouseenter", function (e) {
        e.style.backgroundColor = enterStyle;
    })
    e.addEventListener("mouseleave", function (e) {
        e.style.backgroundColor = leaveStyle;
    })
}

//用于获取ele的width和height
function getEle_offset_style(e, returnData_style, name, style) {
    if (returnData_style == "h" | returnData_style == "H") {
        return e.offsetHeight;
    } else if (returnData_style == "w" | returnData_style == "W") {
        return e.offsetWidth;
    }
    if (name & style) {
        switch (style) {
            case w:
                window.name = e.offsetWidth;
                break;
            case h:
                window.name = e.offsetHeight;
                break;
            default:
                return false;
        }
    }
}
//构建跳转函数
function getTo(e, link) {
    e.addEventListener("click", function () {
        window.open(link)
    })
}
/* 
//获取每个item下的h1
function getFS(e,eName,eSonName) {
    window.eName = document.getElementById(e);
    window.eSonName = document.getElementById(e).querySelector('h1');
}
getFS('base_word','base_w','base_w_title');
console.log(base_w,base_w_title); */

//main script for content

function setPosition(e, eFather) {
    e.style.top = getEle_offset_style(eFather, 'h') / 3 / 2 - getEle_offset_style(e, 'h') / 2 + 'px';
    // e.style.left = getEle_offset_style(eFather, 'w') / 6 - getEle_offset_style(e, 'w') / 2 + 'px';
};

//更改元素在enter和leave时的bgc
function itemHover(e,ef, enterColor, leaveColor) {
    ef.addEventListener('mouseover', function () {
        // for (var i = 0; i <= items.length; i++) {
        e.addEventListener('mouseenter', function () {
            this.style.backgroundColor = enterColor;
        })
        if (leaveColor) {
            e.addEventListener('mouseleave', function () {
                this.style.backgroundColor = leaveColor;
            })
        } else {
            e.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'rgb(130, 215, 208)';
            })
        }
        // }
    })
}

//禁止鼠标拖动元素
function forbidDataDrafting() {
    document.ondragstart = function () {
        return false;
    };
};