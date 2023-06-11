(function () {
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
        document.documentElement.style.fontSize = '12px';
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = '16px';
    } else {
        document.documentElement.style.fontSize = '32px';
    }
}());

function disBlock(objBtn, objBlock, objNone01, objNone02, obj03, obj04, obj05) {
    objBtn.onclick = function () {
        objBlock.style.display = 'block';
        objNone01.style.display = 'none';
        if (objNone02) {
            objNone02.style.display = 'none';
        }
        if (obj03) {
            obj03.style.display = 'none';
        }
        if (obj04) {
            obj04.style.display = 'none';
        }
        if (obj05) {
            obj05.style.display = 'none';
        }
    }
};

var cont = document.getElementById('cont');
(function () {
    var lis = cont.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function () {
            this.style.zIndex = '99';
        })
        lis[i].addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        })
    }
}());

function fill(e, e1, e2, e3, e4, e5) {
    e.onclick = function () {
        e1.style.display = "block";
        if (e2) {
            e2.style.display = 'block';
        }
        if (e3) {
            e3.style.display = 'block';
        }
        if (e4) {
            e4.style.display = 'block';
        }
        if (e5) {
            e5.style.display = 'block';
        }
    }
};


//禁止页面数据拖拽
function forbidDataDrafting() {
    document.ondragstart = function () {
        return false;
    };
};
forbidDataDrafting()