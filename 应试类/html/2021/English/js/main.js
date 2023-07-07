window.addEventListener('DOMContentLoaded', function () {
    var f = document.getElementsByClassName('friendLink')[0];
    var abt = document.getElementsByClassName('about')[0];

    var mt = document.getElementById("mt");

    var cont = document.getElementsByClassName('content')[0];
    var items = document.getElementsByClassName('item');

    var base_g = document.getElementById('base_grammar');
    var base_g_title = base_g.querySelectorAll('h2')[0];

    var base_w = document.getElementById('base_word');
    var base_w_title = base_w.querySelectorAll('h2')[0];

    var base_wG = document.getElementById('base_wordGroup');
    var base_wG_title = base_wG.querySelectorAll('h2')[0];

    var cxCng = document.getElementById('PartOfSpeech_conversion');
    var xcCng_title = cxCng.querySelectorAll('h2')[0];

    var sp = document.getElementById('sentence_pattern');
    var sp_title = sp.querySelectorAll('h2')[0];

    var lv = document.getElementById('longer_vocabulary');
    var lv_title = lv.querySelectorAll('h2')[0];

    var ol = document.getElementById('old_file');
    var ol_title = ol.querySelectorAll('h2')[0];

    var sf = document.getElementById('simple_form');
    sf_title = sf.querySelectorAll('h2')[0];

    var cover = document.getElementById('cover');

    var contAll_width = cont.clientWidth * 3;
    var item_height = cont.clientHeight / 3;

    setTimeout(function () {
        mt.style.left = 0
    }, 200);

    base_g.style.position = 'relative';

    setPosition(base_g_title, cont);
    setPosition(base_w_title, cont);
    setPosition(base_wG_title, cont);
    setPosition(xcCng_title, cont);
    setPosition(sp_title, cont);
    setPosition(lv_title, cont);
    setPosition(ol_title, cont);
    setPosition(sf_title, cont);

    (function () {
        cont.addEventListener('mouseover', function () {
            for (var i = 0; i <= items.length; i++) {
                items[i].addEventListener('mouseenter', function () {
                    this.style.zIndex = 99;
                })
                items[i].addEventListener('mouseleave', function () {
                    this.style.zIndex = 98;
                })
            }
        })
    }());

    cont.addEventListener('mouseenter', function () {
        setTimeout(function () {
            mt.style.color = 'transparent';
        }, 300);
        cover.style.filter = "blur(" + 32 + 'px)';
    });
    cont.addEventListener('mouseleave', function () {
        setTimeout(function () {
            mt.style.color = '#666';
        }, 300);
        cover.style.filter = "blur(" + 0 + 'px)';
    });

    itemHover(base_g, cont, 'rgba(86, 31, 7, 0.6)')

    getTo(base_g, 'html/base_grammar.html');
    getTo(base_w, 'html/base_word.html');
    getTo(base_wG, 'html/base_wordGroup.html');
    getTo(cxCng, 'html/PartOfSpeech_conversion.html');
    getTo(sp, 'html/sentence_pattern.html');
    getTo(lv, 'html/longer_vocabulary.html');
    getTo(ol, 'English.html');
    getTo(sf, 'html/simple_form.html');

    
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM||bIsIpad) {
        cont.style.top ='16%';
        mt.style.top = 'calc(16% - 2rem)';
        abt.style.top = '0.2rem';
        abt.style.textIndent = '1rem';
        abt.style.fontSize = '0.1rem';
        // abt.innerText = '知识点收集来源于网络及往年笔记，个人整理或有纰漏，如有问题，欢迎向我指正\nvx: ST4000NM000A\nQQ: 1708320534';
    }
});