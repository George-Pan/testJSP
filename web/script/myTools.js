/**
 * Created:  GeorgePan 2016/8/2
 * 目标浏览器范围：IE8-11，chrome，edge
 */

//全局变量
var myTools = {};

//事件
//来源：http://www.ayqy.net/blog/js%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%EF%BC%88%E8%B7%A8%E6%B5%8F%E8%A7%88%E5%99%A8%EF%BC%89/
myTools.EventUtils = {
    addHandler: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
        }
        else if (elem.attachEvent) {
            elem.attachEvent("on" + type, handler);//添加多个同一类型的handler时，IE方式的规则是最后添加的最先触发
        }
        else {
            if (typeof elem["on" + type] === 'function') {
                var oldHandler = elem["on" + type];
                elem["on" + type] = function () {
                    oldHandler();
                    handler();
                }
            }
            else {
                elem["on" + type] = handler;//支持添加多个事件处理器
            }
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    },
    removeHandler: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        }
        else if (elem.detachEvent) {
            elem.detachEvent("on" + type, handler);
        }
        else {
            elem["on" + type] = null;//不支持移除单一事件处理器，只能全部移除
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        }
        else if (event.toElement && event.type == "mouseout") {
            return event.toElement;
        }
        else if (event.fromElement && event.type == "mouseover") {
            return event.fromElement;
        }
        else {
            return null;
        }
    },
    /*IE8点击左键和中键都是0；FF无法识别中键；Chrome正常*/
    getButton: function (event) {//返回0，1，2 - 左，中，右
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        }
        else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                    break;
                case 2:
                case 6:
                    return 2;
                    break;
                case 4:
                    return 1;
                    break;
                default:
                    break;
            }
        }
    },
    /*只能检测keypress事件，返回值等于将要显示的字符编码*/
    /*IE和Chrome只有能显示的字符键才触发，FF其它键也能触发，返回值为0*/
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        }
        else {
            return event.keyCode;
        }
    }
};

//dom系列
myTools.classUtils = {
    has: function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    add: function (obj, cls) {
        if (!this.has(obj, cls)) obj.className += " " + cls;
    },

    remove: function (obj, cls) {
        if (this.has(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },

    toggle: function (obj, cls) {
        if (this.has(obj, cls)) {
            this.remove(obj, cls);
        } else {
            this.add(obj, cls);
        }
    }
};

//IE 9+系列
//document.getElementsByClassName（）
//document.getElementsByTagName()
//edge使用的是addEventListener
//支持2次检索：a=document.getElementById("grid-view").getElementsByClassName("grid-view-item")