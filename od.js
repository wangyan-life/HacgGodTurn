function processTxt(e) { var t, r = e;
    r && (r = r.replace(regObj.bdshare, linkArr.baidu), r = r.replace(regObj.bdshare1, linkArr.baidu), e = r, r = r.replace(/ *-?本站暂?不再?提供(文件)?下载-? */i, "").replace(/ *保护作者版权 */i, "").replace(/ *请支持正版 */i, "").replace(/\<\!--[^>]*>/g, ""), r = /^(magnet|bdcloud) /i.test(r) ? r : r.replace(/([a-z0-9]{5,}) +([a-z0-9]{5,})/g, "$1$2"), t = r, r = !/a\shref="magnet:|md5/i.test(r) ? r.replace(regObj.btih, linkArr.btih) : r, r = r.replace(regObj.yunpan, linkArr.yunpan), r = r.replace(regObj.howfile, linkArr.howf), r = r.replace(regObj.tcn, linkArr.tcn), r = r.replace(regObj.yyw, linkArr.yyw), r = r.replace(regObj.mega, linkArr.mega), r = r.replace(regObj.pixiv, linkArr.pixiv), r = r.replace(/(baidu\.com\/s\/[a-z\d]{7,23})#([\'\"])/gi, "$1$2"), r = r.replace(regObj.xunlei, linkArr.xunlei)); 
    if (t != r) return r;
    else return e; 
}

function extCode(e) { 
    return text = e.textContent.trim(), simpleRule.test(text) ? text.match(simpleRule)[1] : codeRule.test(text) ? text.match(codeRule)[1] : "" 
}

function seriousReplace(e) {
    let t = document.getElementsByClassName(e);
    for (let r in t) 
        t[r] && t[r].innerHTML && (t[r].innerHTML = t[r].innerHTML.replace(/&nbsp;/g," ").replace(/(\s|^|：|<p>|[\u2E80-\u9FFF])(?:https?:\/\/pan\.baidu\.com)?(?:\/?s\/)?(1[0-9a-zA-Z_\-]{6,22})\b(?:\s*(?:<br\s*\/?>)?\s*(?:密码[:：]?|pw:|[pP]|钥匙|提取码?:?)?\s*([a-z0-9A-Z]{4}\b|[^\s,，：:\<\>]{2,4})\s*(<br\s*\/?>|<\/p>|$| +))/g, linkArr.baidu).replace(/(\s|^|：|<p>|[\u2E80-\u9FFF])(?:https?:\/\/pan\.baidu\.com\/)?(?:\/?s\/)(1[0-9a-zA-Z_\-]{6,22})\b\s*(<br\s*\/?>|<\/p>|$)/g, "$1<a href='http://pan.baidu.com/s/$2' target='_blank'>度娘:$2</a> $3 ").replace(regObj.yyw, linkArr.yyw).replace(regObj.tcn, linkArr.tcn), t[r].innerHTML = !/a\shref="magnet:|md5/i.test(t[r].innerHTML) ? t[r].innerHTML.replace(regObj.btih, linkArr.btih) : t[r].innerHTML)
}

function hashFunc(e) { 
    return hashWord = e.match(/^\W*/g)[0], e = e.replace(/[\s\W]*/g, "").toUpperCase(), hashStart = e.slice(0, 2), hashEnd = e.slice(-2), [hashStart, hashEnd, e, hashWord] 
}

function addInsertHandler(e) { var t = !1;
    document.addEventListener("DOMNodeInserted", function() { 
        if ("complete" == document.readyState && !t) { 
            t = !0; var r = 0,
            a = setInterval(function() { 
                1 == r ? changeUrl(!1, e) : 2 == r && (t = !1, clearInterval(a)), r++ 
            }, 500) 
        } 
    }), changeUrl(!0, e) }

function changeUrl(e, t) { 
    for (var r = e ? t[0] : ["a", "img"], a = 0, i = r.length; i > a; a++)
        for (var n = r[a], s = document.querySelectorAll(n), o = 0, l = s.length; l > o; o++)
            for (var p = 0, h = t[1].length; h > p; p++) { 
                var c = new RegExp(t[1][p][0], "gi"); 
                if (n == "a") { 
                    c.test(s[o].href) && (s[o].href = s[o].href.replace(c, t[1][p][1])) 
                } else if (n == "img") { 
                    c.test(s[o].src) && (s[o].src = s[o].src.replace(c, t[1][p][1])) 
                } else { 
                    s[o].parentNode && c.test(s[o].outerHTML) && (s[o].outerHTML = s[o].outerHTML.replace(c, t[1][p][1])) 
                } 
            } 
}
var simpleRule = /(?:提取|访问)[码碼]?\s*[:：\s]?\s*([a-z\d]{4})/i,
    codeRule = /(?:(?:提取|钥匙|访问|密[码碼]|艾|Extracted-code|说明|code[：:][“"]?)密?[码碼]?[为是]?)\s*[:：\s]?\s*([a-z\d]{4}|[^\s,，：:]{2,4})(\s|\b|$)/i,
    regObj = {
        btih: /(?:magnet:\?xt=urn:btih)?((?:[^\/=\|\"]|^)\s*\b)([a-f0-9]{40}|[a-z0-9]{32})\b([^#]|$)/gi,
        bdshare: /(\b|^)(?:b?\/?s\/|.*度.*[:：]|BDcloud *|(?:https?:\/\/)?\s*p\s*a\s*n\s*\.\s*b\s*a\s*i\s*d\s*u\s*\.\s*c?\s*o\s*m\s*\/\s*s\s*\/\s*)(1[0-9a-zA-Z_\-]{6,22})\b(?:\s*(?:.*?[:：]\s*)?([a-zA-Z0-9]{4}(\b|\s|$)|[^\s,，：:\<\>]{2}(\s|$)))?/g,
        bdshare1: /(^|：|:|\n|BDcloud *)\s*(1[0-9a-zA-Z_\-]{6,22})\b(?:\s*(?:[:：\/]\s*)?([a-zA-Z0-9]{4}|[^\s,，：:\<\>]{2}))/g,
        xunlei: /\b(QUF[a-zA-Z0-9\=]+)/g,
        howfile: /@?(?:HF|howfile)(?:\.com)?\/file\/(\w{4,10})\/(\w{8,})\/?/gi,
        tcn: /\bt\/(\w{7})/g,
        yyw: /(\/lb\/)?(5lb[a-zA-Z0-9]{8,12})/g,
        mega: /(?:https?:\/\/mega)?(?:\.co)?(\.nz\s*\/(#[a-zA-Z0-9_!\-]{22,}(\n[a-zA-Z0-9_!\-]+\n)?))/g,
        yunpan: /((?:https:\/\/)?yunpan.cn\/([a-zA-Z0-9]+))/g,
        pixiv: /(?:封面|\s|:|：|^)id[=；](\d+)/gi
    },
    linkArr = [];
    linkArr.btih = '$1<a href="magnet:?xt=urn:btih:$2" >磁链</a> → <a href="https://itorrents.org/torrent/$2.torrent" target="_blank" title="点击下载种子文件">【种子】</a>+<a href="https://btsow.motorcycles/magnet/detail/hash/$2" target="_blank" title="支持Base32,可查看种子内容">【详情】</a>', linkArr.baidu = "$1<a href='http://pan.baidu.com/s/$2#$3' target='_blank'>度娘[$2]</a> $3 ", linkArr.yunpan = "<a href='$1' target='_blank'>云盘：$2</a>", linkArr.howf = "<a href='http://howfile.com/file/$1/$2/' target='_blank'>好盘：howfile.com/file/$1/$2</a>", linkArr.tcn = "<a href='http://t.cn/$1' target='_blank'>短链：t.cn/$1</a>", linkArr.yyw = "<a href='http://115.com/lb/$2' target='_blank'>115礼包:$2</a> ", linkArr.mega = "<a href='https://mega.co$1' target='_blank'>MEGA网盘</a>\n", linkArr.xunlei = "<a href='thunder://$1' target='_blank'>吸血雷</a>", linkArr.pixiv = "<a href='http://www.pixiv.net/member_illust.php?mode=medium&illust_id=$1' target='_blank'>Pixiv原图</a>";
var nod = document.createElement("style"),
    str = ".oD_box{position:fixed;top:60px;right:0px;width:40px;transition: all 0.2s ease;white-space:nowrap;z-index:99998} .oD_box:hover{width:290px} .oD_sel{-ms-transform-origin: 50% 0%;-webkit-transform-origin: 50% 0%;transform-origin: 50% 0%;transform:scale(1.1,1.1);-ms-transform:scale(1.1,1.1);-moz-transform:scale(1.1,1.1);-webkit-transform:scale(1.1,1.1);-o-transform:scale(1.1,1.1);transition: all 1s ease;}";
nod.type = "text/css", nod.styleSheet ? nod.styleSheet.cssText = str : nod.innerHTML = str;
var rocketStr = '<div id="rocketContent" style="display: none;"><div style="height:100%; width:100%; position:fixed; _position:absolute; top:0; z-index:99999; opacity:0.3; filter: alpha(opacity=30); background-color:#000"></div><div style="width:300px;height:300px;position:fixed;left:50%;top:50%;margin-top:-150px;margin-left:-150px;z-index:100000;background-color:#ffffff;border:1px solid #afb3b6;border-radius:10px;opacity:0.95;filter:alpha(opacity=95);box-shadow:5px 5px 20px 0px #000;"><div id="rocketLinks" style="position:absolute;left:20px;top:20px;height:260px;width:260px;overflow:auto;word-wrap:break-word;"></div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA5FBMVEUAAAD+/v7////9/f7////////+/v7+/v7////+/v7+/v7////+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////////////+/v7+/v7+/v7+/v7+/v4uje3///82ke7s9P3N5PtQoPDI4fqCu/Tu9v5Im+/6/P+VxfZgqPFNnvDp8/3f7fq42Pmnz/d1tPNvsfNkq/JCmO/4+/7X6fz19/rn8PqYx/aNwfV8uPRqrvJZpfFUovAzkO3Q5vu92/mr0fieyva92fWx0vQ6lO5pygFTAAAAJHRSTlMAmfD+RMGwgj2mknlIKR/36+XGnIyHfnJfVDk2My8S4E1CJBvTatKDAAABY0lEQVQoz4WSZ1fCMBRA05ahLPfemkspBUFwgGz3+P//x/hK6ZBzvB/ak96+kZeoGCtFK5eziitqCSfWOnM2CuWUrOyQYPc0bjM2htHXh+/ffQ4lQ6zEPoZ6TwdUp10M56EtAe5MR7y0HGAeX7Ghe6MTzIZwFtTfBrepUzw4UFSGY8CUTTMGLo3eglv58By21pRnB7aNBqTwPfWq/OVey9sH22wZXiWo6Yr3GtRl/f0IRyoPYy14v97YWjVY12BPrcK9XvhaZPUdWCoLbR35yOoW5P7R8eQ3JrmbSp6HVmSrXuTrmNYyUAs2JkL6D6YjG1PgNGXK87F4nWAsUxmL2gyH6oVD7cuhdqFg9CE4T/oPE6CsgvBOP21715AP7ugaDFK+3YD1KyUcAG47bn0TSylxFd8WDTwMMByoBSUHw+jd9/3JbQODnVExygUS7FRUksPVtdDZW8dqCZm8lc1auxcq4gc02GVGTUchmgAAAABJRU5ErkJggg==" id="rocketQuit" style="position:absolute;right:0px;top:0px;cursor: pointer;"/></div></div>';

function elementPosition(o) {
    let t = 0,
        e = 0;
    if (o.offsetParent)
        for (t = o.offsetLeft, e = o.offsetTop; o.offsetParent;) o = o.offsetParent, t += o.offsetLeft, e += o.offsetTop;
    return {
        x: t,
        y: e
    }
}


var repeatCount = 0,
    cTimeout;

function scrollToControl(o) {
    let t = o;
    t -= (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    let e = t % 50,
        r = (t - e) / 50;
    window.scrollBy(0, e), scrollSmoothly(t, r, o)
}

function scrollSmoothly(o, t, a) {
    let e = 50;
    return 0 > t && (e = -50), repeatCount < Math.abs(t) ? (window.scrollBy(0, e), repeatCount++, void(cTimeout = setTimeout(function() {
        scrollSmoothly(o, t, a)
    }, 10))) : (void clearTimeout(cTimeout), repeatCount = 0, window.scrollTo(0, a))
}