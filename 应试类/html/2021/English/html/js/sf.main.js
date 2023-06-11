var ph = 10;
var pd = 16;
var pc = 24;
var type;
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
        document.documentElement.style.fontSize = ph + 'px';
        type = 1;
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = pd + 'px';
        type = 2;
    } else {
        document.documentElement.style.fontSize = pc + 'px';
        type = 3;
    }
}());

//用于获取ele的width和height
function getEle_offset_style(e, returnData_style, name, style) {
    if (returnData_style == "h" | returnData_style == "H") {
        return e.offsetHeight;
    } else if (returnData_style == "w" | returnData_style == "W") {
        return e.offsetWidth;
    } else if (returnData_style == "l" | returnData_style == "L") {
        return e.offsetLeft;
    } else if (returnData_style == "t" | returnData_style == "T") {
        return e.offsetTop;
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

function del_ff(elem) {
    var elem_child = elem.childNodes;
    for (var i = 0; i < elem_child.length; i++) {
        if (elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)) {
            elem.removeChild(elem_child)
        }
    }
}

function fun_a_pos() {
    var a = document.getElementsByTagName('a');
    for (var lai = 0; lai < a.length; lai++) {
        var par = a[lai].parentNode; //得到s的父节点
        a[lai].style.textIndent = '0rem';
        a[lai].style.top = getEle_offset_style(par, 'h') / 2 - getEle_offset_style(a[lai], 'h') / 2 + 'px';
    }
}

function fun_l_pos() {
    var l = document.getElementsByClassName('link');
    for (var lki = 0; lki < l.length; lki++) {
        l[lki].style.textIndent = '0';
        l[lki].style.letterSpacing = '0.1rem';

        var par = l[lki].parentNode;
        for (var p = 0; p < par.length; p++) {
            document.addEventListener('DOMContentLoaded', function () {
                var pl = par[p].querySelectorAll('.link');
                if (pl[0]) {
                    console.log(this);
                    this.style.top = '0';
                }
                if (pl[1]) {
                    this.style.top = '25%';
                }
                if (pl[2]) {
                    this.style.top = '50%';
                }
                if (pl[3]) {
                    this.style.top = '75%';
                }

            })
        };
    }
}
fun_l_pos()
fun_a_pos()

// for(var i = 0; i < h3s.length; i++) {
for (var j = 0; j < lis.length; j++) {
    setTimeout(function () {
        lis[lis.length - 1].style.marginBottom = 2 + 'rem';
    }, 100)
    lis[j].addEventListener('mouseenter', function () {
        var es = this.children;
        var as = this.querySelectorAll('.apposition');
        var mt = this.querySelectorAll('.mTitle');
        var a = this.querySelectorAll('a');
        var links = this.querySelectorAll('.link');
        var lh = getEle_offset_style(this, 'h');
        var eg = this.querySelectorAll('.eg');

        // console.log(th3[0].style.textIndent);
        for (var ei = 0; ei < es.length; ei++) {
            es[ei].style.transition = '0.3s'
            es[ei].style.textIndent = '2rem';
        }
        for (var ij = 0; ij < eg.length; ij++) {
            eg[ij].style.transition = '0.4s';
            eg[ij].style.textIndent = '6rem';
            eg[ij].style.letterSpacing = '0.12rem'
        }
        for (var ai = 0; ai < as.length; ai++) {
            as[ai].style.transform = 'translateX(0.16rem)';
        }
        for (var mi = 0; mi < mt.length; mi++) {
            mt[mi].style.transform = 'translateX(4.6rem)';
        }
        for (var lki = 0; lki < links.length; lki++) {
            links[lki].style.textIndent = '0';
            links[lki].style.letterSpacing = '0.1rem';
            if (links[0]) {
                links[0].style.top = '0';
            }
            if (links[1]) {
                links[1].style.top = '25%';
            }
            if (links[2]) {
                links[2].style.top = '50%';
            }
            if (links[3]) {
                links[3].style.top = '75%';
            }
        }
        for (var lai = 0; lai < a.length; lai++) {
            a[lai].style.textIndent = '0rem';
            var pixel;
            if (type = 1) {
                pixel = ph * 3 / 20;
            } else if (type = 2) {
                pixel = pd * 3 / 20;
            } else if (type = 3) {
                pixel = pc * 3 / 20;
            }
            a[lai].style.top = getEle_offset_style(lh, 'h') / 2 - getEle_offset_style(a[lai], 'h') / 2 - pixel + 'px';
        }
    })
    lis[j].addEventListener('mouseleave', function () {
        var es = this.children;
        var mt = this.querySelectorAll('.mTitle');
        var links = this.querySelectorAll('.link');

        for (var ei = 0; ei < es.length; ei++) {
            es[ei].style.textIndent = '0rem';
        }
        for (var mi = 0; mi < mt.length; mi++) {
            mt[mi].style.transform = 'translateX(0rem)';
        }
        for (var lki = 0; lki < links.length; lki++) {
            links[lki].style.textIndent = '0';
            links[lki].style.letterSpacing = '0';
        }
        fun_a_pos()
    })
}
// }