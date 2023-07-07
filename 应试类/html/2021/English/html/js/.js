var ph = 14;
var pd = 18;
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

/* function dom() {
    var s = document.getElementById("test");
    del_ff(s); //清理空格
        var chiles = s.childNodes; //得到s的全部子节点
    var par = s.parentNode; //得到s的父节点
        var ns = s.nextSbiling; //获得s的下一个兄弟节点
        var ps = s.previousSbiling; //得到s的上一个兄弟节点
        var fc = s.firstChild; //获得s的第一个子节点
        var lc = s.lastChile; //获得s的最后一个子节点
} */

function fun_a_pos() {
    var a = document.getElementsByTagName('a');
    for (var lai = 0; lai < a.length; lai++) {
        var par = a[lai].parentNode; //得到s的父节点
        // a[lai].setAttribute(' target') = '_bland';
        // console.log(a[lai].setAttribute(' target'));
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
var h1s = document.getElementsByTagName('h1');
var h2s = document.getElementsByTagName('h2');
var h3s = document.getElementsByTagName('h3');
var h4s = document.getElementsByTagName('h4');
var h5s = document.getElementsByTagName('h5');
var lis = document.getElementsByTagName('li');

var area = document.getElementsByClassName('area');
var cb_f = 0;
var oh_f = 0;

function add_btn_cb() {
    document.documentElement.innerHTML += ' <div id="cb_container" style=" position: sticky; top: 0.16rem; margin-left: calc(100% - 6rem); z-index: 6; "> <button style=" position: relative; padding: 1rem 1.6rem; white-space: nowrap; border-radius: 16px; border: none; box-shadow: 1px 1px 16px 1px #999; " id="cb">关闭伪元素 </button> <button style=" position: relative; padding: 1rem 1.6rem; white-space: nowrap; border-radius: 16px; border: none; box-shadow: 1px 1px 16px 1px #999; " id="oh">开启onmouseenter状态 </button> <span id="oh_close" onmouseenter="this.style.backgroundColor = "rgba(255,160,170,.6)"" onmouseleave="this.style.backgroundColor = "transparent"" style=" position: absolute; top: 0; left: 100%; text-align: center; font-size: 0.6rem; /* transform: scale(1.6,1); */ line-height: 1rem; width: 1rem; height: 1rem;/* background-color: rgb(194, 194, 194);*/ ">x</span> </div>';
}
add_btn_cb()
var cb = document.getElementById('cb');
var cbc = document.getElementById('cb_close');
var ohc = document.getElementById('oh_close');
var cb_cont = document.getElementById('cb_container');
var oh = document.getElementById('oh');

setTimeout(function () {
    if (cb) {} else {
        add_btn_cb();
    }
})

function s_ac_pos() {
    cbc.style.left = getEle_offset_style(cb, 'w') - getEle_offset_style(cbc, 'w') / 2 + 'px';
    cbc.onmouseenter = function () {
        this.style.backgroundColor = 'rgba(255,70,80,.6)';
    }
    cbc.onmouseleave = function () {
        this.style.backgroundColor = 'transparent';
    }
    cbc.onclick = function () {
        cb_cont.remove();
    }
}
// s_ac_pos()

function before_on() {
    cb.innerText = '关闭伪元素';
    for (var i = 0; i < lis.length; i++) {
        lis[i].className += ' area_before';
    }
}
before_on();

function before_off() {
    cb.innerText = '打开伪元素';
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = 'area';
    }
}

cb.onclick = function () {
    if (cb_f == 0) {
        before_off();
        cb_f = 1;
    } else {
        before_on();
        cb_f = 0;
    }
}

function all_mEnter() {
    for (var j = 0; j < lis.length; j++) {
        lis[j].addEventListener('mouseenter', function () {
            var es = this.children;
            var as = this.querySelectorAll('.apposition');
            // console.log(es);
            var th3 = this.querySelectorAll('.eq');
            var th3H = this.querySelectorAll('.equal_head');
            var th3B = this.querySelectorAll('.equal_body');
            var th5 = this.querySelectorAll('h5');
            var mt = this.querySelectorAll('.mTitle');
            var a = this.querySelectorAll('a');
            var links = this.querySelectorAll('.link');
            var lh = getEle_offset_style(this, 'h');
            var eg = this.querySelectorAll('.eg');

            for (var ei = 0; ei < es.length; ei++) {
                es[ei].style.transition = '0.3s'
                es[ei].style.textIndent = '2rem';
            }
            for (var eqh = 0; eqh < th3H.length; eqh++) {
                th3H[eqh].style.textIndent = 2.4 + 'rem';
            }
            for (var eqb = 0; eqb < th3B.length; eqb++) {
                th3B[eqb].style.textIndent = 4.2 + 'rem';
            }
            for (var ij = 0; ij < th3.length; ij++) {
                th3[ij].style.textIndent = 4.2 + 'rem';
                th3[0].style.textIndent = 2.4 + 'rem';
            }
            for (var ij = 0; ij < th5.length; ij++) {
                th5[ij].style.transition = '0.4s';
                th5[ij].style.textIndent = '20%';
                th5[ij].style.letterSpacing = '0.32rem'
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
    }
}

function all_mLeave() {
    var es = this.children;
    var as = this.querySelectorAll('.apposition');
    var th3 = this.querySelectorAll('.eq');
    var th31 = this.querySelectorAll('.equ')
    var th5 = this.querySelectorAll('h5');
    var mt = this.querySelectorAll('.mTitle');
    var links = this.querySelectorAll('.link');

    for (var ei = 0; ei < es.length; ei++) {
        es[ei].style.textIndent = '0rem';
    }
    for (var ij = 0; ij < th3.length; ij++) {
        // th3[ij].style.marginLeft = '0rem';
        th3[ij].style.textIndent = '0.2rem';
    }
    for (var ij3 = 0; ij3 < th31.length; ij3++) {
        th31[ij3].style.textIndent = '0.2rem';
    }
    for (var ij = 0; ij < th5.length; ij++) {
        th5[ij].style.textIndent = '0';
        th5[ij].style.letterSpacing = '0.1rem'
    }
    for (var ai = 0; ai < as.length; ai++) {
        as[ai].style.transform = 'translateX(0.16rem)';
    }
    for (var mi = 0; mi < mt.length; mi++) {
        mt[mi].style.transform = 'translateX(0rem)';
        // mt[mi].style.textIndent = '0rem';
    }
    for (var lki = 0; lki < links.length; lki++) {
        links[lki].style.textIndent = '0';
        links[lki].style.letterSpacing = '0';
    }
    fun_a_pos()
}
// for(var i = 0; i < h3s.length; i++) {
for (var j = 0; j < lis.length; j++) {
    setTimeout(function () {
        lis[lis.length - 1].style.marginBottom = 2 + 'rem';
    }, 100)

    oh.onclick = function () {
        if (oh_f == 0) {
            all_mEnter();
            this.innerText = '1';
            oh_f = 1;
        } else {
            all_mLeave();
            this.innerText = '2';
            oh_f = 0;
        }
    }
    lis[j].addEventListener('mouseenter', function () {
        all_mEnter();
    })
    lis[j].addEventListener('mouseleave', function () {})
}
// }