// 百度云 grid-view 的逻辑(部分)
t.oncontextmenu = function (t) {
    t = void 0 === t && window.event ? window.event : t, t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.contextMenu(t, n, this, i)
}
},
"undefined" != typeof n && n.exports ? n.exports = t : window.rMenu = t, "undefined" != typeof $ && $.fn && ($.fn.rMenu = function (t, n) {
    $(this).each(function () {
        var i = dom.getAttribute("data-cid");
        if (i && e.domConf[i]) {
            try {
                e.domConf[i].parentElement.removeChild(e.domConf[i])
            } catch (o) {
            }
            delete e.domConf[i], delete e.eventConf[i], e.keyBoard = {}
        }
        this.oncontextmenu = function (i) {
            i = void 0 === i && window.event ? window.event : i, i.preventDefault ? i.preventDefault() : i.returnValue = !1, e.contextMenu(i, t, this, n)
        }
    })
}), e.init()
}
()
})
;