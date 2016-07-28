////////////////////////////////////
////myLittleCarrotForJS written by caowei
////first edit :20141225
////////////////////////////////////
////////////////////////////////////
var myLittleCarrotForJS = {};

//////////////诞生礼
myLittleCarrotForJS.helloworld = function () {
    alert("hello world,my little carrot was born in 2014 - 12 - 25");
}


///////////////////////加载样式//////////////////////////////////////
myLittleCarrotForJS.LoadStyle = function (url) {
    try {
        document.createStyleSheet(url)
    } catch (e) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(cssLink)
    }
}


//获取url参数,在传递参数过来的时候很有用，直接到args里面去取就可以了,返回的是一个对象
myLittleCarrotForJS.getURLParams = function (url) {
    if (!url) {
        url = location.search.substring(1);
    } else {
        url = url.substr(url.indexOf('?') + 1);
    }
    var args = new Object();   // 声明并初始化一个 "类"
    // 获得地址(URL)"?"后面的字符串.
    var query = decodeURI(url);
    var pairs = query.split("&");  // 分割URL(别忘了'&'是用来连接下一个参数)
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue; // 它在找有等号的 数组[i]
        var argname = pairs[i].substring(0, pos); // 参数名字
        var value = pairs[i].substring(pos + 1);  // 参数值
        // 以键值对的形式存放到"args"对象中
        args[argname] = decodeURI(value);
    }
    return args;
}


//转义html标签,但是好像没有什么作用，日后完善
/////例如　myLittleCarrotForJS.encodeHTML("<div>hello world</div>")
///////////输出结果： &lt;div&gt;hello world&lt;/div
myLittleCarrotForJS.encodeHTML = function (text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}


//attachEvent、addEventListener添加事件到对象
//detachEvent、removeEventListener注销对象事件
/*
 JS:attachEvent和addEventListener 使用方法
 attachEvent与addEventListener区别
 适应的浏览器版本不同，同时在使用的过程中要注意
 attachEvent方法          按钮onclick
 addEventListener方法     按钮click
 两者使用的原理：可对执行的优先级不一样，下面实例讲解如下：
 attachEvent方法，为某一事件附加其它的处理事件。（不支持Mozilla系列）
 addEventListener方法 用于 Mozilla系列

 举例: document.getElementById("btn").onclick = method1;
 document.getElementById("btn").onclick = method2;
 document.getElementById("btn").onclick = method3;
 如果这样写,那么将会只有method3被执行

 写成这样：
 var btn1Obj = document.getElementById("btn1"); //object.attachEvent(event,function);
 btn1Obj.attachEvent("onclick",method1);
 btn1Obj.attachEvent("onclick",method2);
 btn1Obj.attachEvent("onclick",method3);
 执行顺序为method3->method2->method1


 如果是Mozilla系列，并不支持该方法，需要用到addEventListener var btn1Obj = document.getElementById("btn1");
 //element.addEventListener(type,listener,useCapture);
 btn1Obj.addEventListener("click",method1,false);
 btn1Obj.addEventListener("click",method2,false);
 btn1Obj.addEventListener("click",method3,false);
 执行顺序为method1->method2->method3

 element.addEventListener(type,listener,useCapture)
 其中element是要绑定函数的对象。
 type是事件名称，要注意的是"onclick"要改为"click","onblur"要改为"blur",也就是说事件名不要带"on"。
 listener当然就是绑定的函数了，记住不要跟括号
 最后一个参数是个布尔值，表示该事件的响应顺序,下面重点介绍一下addEventListener的第3个参数(useCapture)。
 */



//////////////////////////////////看调用的方式,如果方法里面带来参数怎么办？在方法里面加上 return funtion(){}//////////////////////////////
//var obj=document.getElementById("hello");
//evt="onclick";
//myLittleCarrotForJS.addEvent(obj,evt,whenyouadd);//////你看到了，whenyouadd就是一个方法

//跨浏览器绑定事件
myLittleCarrotForJS.addEvent = function (obj, evt, fn) {
    if (!obj) {
        return;
    } ///////DOM的element对象
    if (window.attachEvent) {
        obj.attachEvent(evt, fn);
    }
    else {
        evt = evt.getStringByFirstAndLength(2); ////将onclick变成click
        obj.addEventListener(evt, fn, false);  ////这里的false ,true只是代表执行顺序的不同
    }
}
//跨浏览器删除事件
myLittleCarrotForJS.deleteEvent = function (obj, evt, fn) {
    if (!obj) {
        return;
    } ///////DOM的element对象
    if (window.detachEvent) {
        obj.detachEvent(evt, fn);
    }
    else {
        evt = evt.getStringByFirstAndLength(2); ////将onclick变成click
        obj.removeEventListener(evt, fn, false);
    }
}

//完美判断是否为网址
myLittleCarrotForJS.IsURL = function (strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true;
    } else {
        return false;
    }
}


//得到一个随机数，特别是在发服务的时候，有时候会返回缓存的东西，用一个随机数可以改变这种情况，这个随机数不会相同
myLittleCarrotForJS.getRandomValue = function () {
    var a = Math.random, b = parseInt;
    return Number(new Date()).toString() + b(1000 * a()) + b(100 * a()) + b(10 * a());
}


///////////////////////////////////////////////定义窗口方面的东西//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// window  PART////////////////////////////////////////////////////
//获取页面高度
myLittleCarrotForJS.getPageHeight = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
//获取页面宽度
myLittleCarrotForJS.getPageWidth = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

//获取页面可视宽度
myLittleCarrotForJS.getPageViewWidth = function () {
    var d = document, a = d.compatMode == "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientWidth;
}
//获取页面可视高度
myLittleCarrotForJS.getPageViewHeight = function () {
    var d = document, a = d.compatMode == "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientHeight;
}

//获取页面scrollLeft
myLittleCarrotForJS.getPageScrollLeft = function () {
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}
//获取页面scrollTop
myLittleCarrotForJS.getPageScrollTop = function () {
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}
//获取窗体可见范围的宽与高
myLittleCarrotForJS.getViewSize = function () {
    var de = document.documentElement;
    var db = document.body;
    var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
    var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
    return Array(viewW, viewH);
}

//获取网页被卷去的位置,返回的是一个对象，有x,y两个属性
myLittleCarrotForJS.getScrollObjectXY = function () {
    return document.body.scrollTop ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
    } : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
    }
}

//加入收藏夹
myLittleCarrotForJS.AddFavorite = function (sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}
//设为首页
myLittleCarrotForJS.setHomepage = function (homeurl) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(homeurl)
    } else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch (e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', homeurl)
    }
}

/////打印当前页面
myLittleCarrotForJS.printWindow = function () {
    window.print();
}

/////关闭当前页面
myLittleCarrotForJS.closeWindow = function () {
    window.close();
}

/////刷新当前页面，相当于F5
myLittleCarrotForJS.refreshWindow = function () {
    window.location.reload();
}

/////窗口重定向
myLittleCarrotForJS.reLocationURL = function (URL) {
    //////window.navigate(URL);这个方法是只针对IE的，不适用于火狐等其他浏览器，在HTML DOM Window Object中，根本没有列出window.navigate这个方法，所以这个方法尽量少用，遗忘最好。
    window.location.href = URL; // location 属性是兼容所有浏览器的。因此在实现页面跳转的时候还是使用这个比较靠谱
    //////window.location的属性: protocol(协议http:),hostname(",指跳转到相应的锚记),href(全部的信息)
}

/////全屏显示当前页面
myLittleCarrotForJS.fullWindow = function () {
    launchFullScreen(document.documentElement); // 整个网页
}

/////// 退出全屏模式!
myLittleCarrotForJS.exitFullWindow = function () {
    exitFullscreen();
}

/////////////////全屏时使用的方法//////////////////////
function launchFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}


// 退出全屏模式时采用的方法
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


///////////////////////////////////////////////定义数字方面的东西//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// MATH  PART////////////////////////////////////////////////////

///////////////将字符串,浮点型转化成整形
myLittleCarrotForJS.parseInt = function (inputValue) {
    return parseInt(inputValue.toString());
}

///////////////将字符串,整形转化成浮点型
myLittleCarrotForJS.parseFloat = function (inputValue) {
    return parseFloat(inputValuetoString());
}

//////////////判断输入的是否是数字，数字返回true,不是数字就返回false
myLittleCarrotForJS.isNumber = function (inputValue) {
    return !(isNaN(inputValue));
}

//格式化数字
myLittleCarrotForJS.formatNumberToFix = function (number, decimals, dec_point, thousands_sep) {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

//拆分一个数分为整数与小数部分，返回一个数组,如果是小数就返回两个元素，如果是整数，返回一个对象
myLittleCarrotForJS.splits = function (inputValue) {
    inputValue = inputValue.toString();
    var value = new Array('', '');
    temp = inputValue.split(".");
    for (var i = 0; i < temp.length; i++) {
        value = temp;
    }
    return value;
}


///////////////////////////////////////////////定义字符串方面的东西//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// STRING  PART////////////////////////////////////////////////////
// 返回字符串的实际长度, 一个汉字算2个长度
String.prototype.strlen = function () {
    return this.replace(/[^\x00-\xff]/g, "**").length;
}

//字符串超出制定长度后省略
String.prototype.cutString = function (len) {
    var restr = this;
    var wlength = this.replace(/[^\x00-\xff]/g, "**").length;
    if (wlength > len) {
        for (var k = len / 2; k < this.length; k++) {
            if (this.substr(0, k).replace(/[^\x00-\xff]/g, "**").length >= len) {
                restr = this.substr(0, k) + "...";
                break;
            }
        }
    }
    return restr;
}

//替换全部
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
}

//字符串去掉前后的空格
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

//////字符串去掉所有的空格
String.prototype.trimAll = function () {
    return this.replace(/\s+/g, "");
}

/////字符串去掉左边的空格
String.prototype.lTrim = function () {
    return this.replace(/(^\s*)/g, "");
}

/////字符串去掉右边的空格
String.prototype.rTrim = function () {
    return this.replace(/(\s*$)/g, "");
}
//判断是否以某个字符串开头 ,返回true or false
String.prototype.startWith = function (s) {
    return this.indexOf(s) == 0
}
//判断是否以某个字符串结束,返回true or false
String.prototype.endWith = function (s) {
    var d = this.length - s.length;
    return (d >= 0 && this.lastIndexOf(s) == d)
}

/////////////////////根据定的起点位置和长度，返回字符串的一部分，如果不输入长度，则返回到末尾
String.prototype.getStringByFirstAndLength = function (start, length) {   //////值得注意的一点就是this代表了输入的对象
    length = parseInt(length);
    return this.substr(start, length);
}

//返回字符串的某个位置的字符
String.prototype.getCharOfString = function (inputValue) {
    return this.charAt(inputValue);
}

//返回字符串的某个位置的字符的ASCii码值
String.prototype.getCharCodeOfString = function (inputValue) {
    return this.charCodeAt(inputValue);
}

//返回字符串中某个字符串第一次出现的位置,如果字符串没有出现，则返回-1,如果beginIndex不输入，则默认从最开始的地方开始搜索
String.prototype.getStringIndexOfString = function (inputString, beginIndex) {
    return this.indexOf(inputString, beginIndex);
}

//返回字符串中某个字符串最后一次出现的位置,如果字符串没有出现，则返回-1,如果beginIndex不输入，则默认从最开始的地方开始搜索
String.prototype.getStringLastIndexOfString = function (inputString, beginIndex) {
    return this.lastIndexOf(inputString, beginIndex);
}


///////////////////////////////////////////////定义数组方面的东西//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// ARRAY  PART////////////////////////////////////////////////////
//判断某个值是否在数组中
Array.prototype.in_array = function (e) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == e)
            return true;
    }
    return false;
}
//判断某个值在数组中的位置
Array.prototype.indexOf = function (e) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == e)
            return i;
    }
    return -1;
}

//删除数组中存在重复的元素,返回删除后相同对象的数组
myLittleCarrotForJS.deleteTheSameElementInArray = function (someArray) {
    var tempArray = someArray.slice(0); //复制数组到临时数组
    for (var i = 0; i < tempArray.length; i++) {
        for (var j = i + 1; j < tempArray.length;) {
            if (tempArray[j] == tempArray[i])
            //后面的元素若和待比较的相同，则删除并计数；
            //删除后，后面的元素会自动提前，所以指针j不移动
            {
                tempArray.splice(j, 1);
            }
            else {
                j++;  //不同，则指针移动
            }

        }
    }
    return tempArray;
}


//判断数组中是否存在重复的元素 ,返回true or false
myLittleCarrotForJS.hasTheSameElementInArray = function (someArray) {
    tempArray = someArray.slice(0); //复制数组到临时数组
    for (var i = 0; i < tempArray.length; i++) {
        for (var j = i + 1; j < tempArray.length;) {
            if (tempArray[j] == tempArray[i])
            //后面的元素若和待比较的相同，则删除并计数；
            //删除后，后面的元素会自动提前，所以指针j不移动
            {
                return true;
            }
            else {
                j++; //不同，则指针移动
            }

        }
    }
    return false;
}

///////////////////////////////////////////////定义Cookie方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// COOKIE  PART////////////////////////////////////////////////////
//添加一句 cookie机制采用的是在客户端保持状态的方案，而session机制采用的是在服务器端保持状态的方案

//添加cookie 包括名称，值 和 时间
myLittleCarrotForJS.addCookie = function (objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;

}

//获取cookie值
myLittleCarrotForJS.getCookie = function (objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}

//删除cookie值
myLittleCarrotForJS.deleteCookie = function (name) {
    //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}

//////清除所有的cookie
myLittleCarrotForJS.clearCookie = function () {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}


///////////////////////////////////////////////定义xml方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// xml  PART////////////////////////////////////////////////////


///////////////////////////////////////////////定义json方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// json  PART////////////////////////////////////////////////////


///////////////////////////////////////////////定义弹窗方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// modal modaless window  PART////////////////////////////////////////////////////
/**
 * 打开子窗口
 * @param url - 子窗口地址
 * @param params - 父窗口传给子窗口的参数
 * @param width - 子窗口宽度
 * @param height - 子窗口高度
 * @returns 子窗口传给父窗口的参数
 */
myLittleCarrotForJS.openDialog = function (url, params, width, height) {
    var is_opera = /opera/i.test(navigator.userAgent);
    var is_ie = (/msie/i.test(navigator.userAgent) && !is_opera);
    var is_ie_6 = (is_ie && /msie 6\.0/i.test(navigator.userAgent));

    var value = "";
    if (is_ie_6) {
        height = height + 50;
        value = window.showModalDialog(url, params, "menubar:no;dialogWidth:" + width + "px;status:no;title:no;help:no;resizable:no;scroll:yes;location:no;toolbar:no;dialogHeight:" + height + "px");
    } else {
        value = window.showModalDialog(url, params, "menubar:no;dialogWidth:" + width + "px;status:no;title:no;help:no;resizable:no;scroll:yes;location:no;toolbar:no;dialogHeight:" + height + "px");
    }
    return value;
}
/////////////////////////////////////注意几点////////////////////////////////////////////////
//////////////////1 调用的时候     var params = { titleText: "新建视点"};
//var data = myLittleCarrotForJS.openDialog("model.html",params,500,600);
//////////////////2 在其余的html中，通过window.dialogArguments;来得到传过来的参数

/*  可以看到，子窗口不能直接用父对象的js文件，还是要自己调用
 这点和JS文件里的panel然后调用不一样，还是要搞清楚frame之间的关系
 <html>
 <head>
 </head>
 <body onload="init();">
 <input type="button" id="hello" value="添加cookie" onclick="whenyouadd()"  />
 <script type="text/javascript" src="myLittleCarrotForJS.js"></script>
 <script>
 var params = window.dialogArguments;
 var titleText = params.titleText;
 function init(){
 var data = params.titleText;
 }
 function whenyouadd()
 {
 myLittleCarrotForJS.helloworld();
 }
 </script>
 </body>
 </html>
 */







///////////////////////////////////////////////定义验证方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////验证表单  PART////////////////////////////////////////////////////
//匹配国内固定电话号码(0511-4405222 或 021-87888822)
myLittleCarrotForJS.isFixedTelephone = function (str) {
    var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
    if (result == null) return false;
    return true;
}

//匹配身份证(15位或18位)
myLittleCarrotForJS.isIDCard = function (str) {
    var result = str.match(/\d{15}|\d{18}/);
    if (result == null) return false;
    return true;
}


//匹配移动电话
myLittleCarrotForJS.isMobilePhoneNumber = function (str) {
    if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(str))) {
        return false;
    }
    return true;
}

// 判断输入是否是一个由 0-9 / A-Z / a-z 组成的字符串
myLittleCarrotForJS.isAlphaAndNumber = function (str) {
    var result = str.match(/^[a-zA-Z0-9]+$/);
    if (result == null) return false;
    return true;
}
// 判断输入是否是有效的电子邮件
myLittleCarrotForJS.isEmail = function (str) {
    var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result == null) return false;
    return true;
}

//金额大写转换函数 transform('123431233132.23')
myLittleCarrotForJS.transformNumberToChinese = function (tranvalue) {
    try {
        var i = 1;
        var dw2 = new Array("", "万", "亿"); //大单位
        var dw1 = new Array("拾", "佰", "仟"); //小单位
        var dw = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //整数部分用
        //以下是小写转换成大写显示在合计大写的文本框中
        //分离整数与小数
        var source = splits(tranvalue);
        var num = source[0];
        var dig = source[1];
        //转换整数部分
        var k1 = 0; //计小单位
        var k2 = 0; //计大单位
        var sum = 0;
        var str = "";
        var len = source[0].length; //整数的长度
        for (i = 1; i <= len; i++) {
            var n = source[0].charAt(len - i); //取得某个位数上的数字
            var bn = 0;
            if (len - i - 1 >= 0) {
                bn = source[0].charAt(len - i - 1); //取得某个位数前一位上的数字
            }
            sum = sum + Number(n);
            if (sum != 0) {
                str = dw[Number(n)].concat(str); //取得该数字对应的大写数字，并插入到str字符串的前面
                if (n == '0') sum = 0;
            }
            if (len - i - 1 >= 0) { //在数字范围内
                if (k1 != 3) { //加小单位
                    if (bn != 0) {
                        str = dw1[k1].concat(str);
                    }
                    k1++;
                } else { //不加小单位，加大单位
                    k1 = 0;
                    var temp = str.charAt(0);
                    if (temp == "万" || temp == "亿") //若大单位前没有数字则舍去大单位
                        str = str.substr(1, str.length - 1);
                    str = dw2[k2].concat(str);
                    sum = 0;
                }
            }
            if (k1 == 3) { //小单位到千则大单位进一
                k2++;
            }
        }
        //转换小数部分
        var strdig = "";
        if (dig != "") {
            var n = dig.charAt(0);
            if (n != 0) {
                strdig += dw[Number(n)] + "角"; //加数字
            }
            var n = dig.charAt(1);
            if (n != 0) {
                strdig += dw[Number(n)] + "分"; //加数字
            }
        }
        str += "元" + strdig;
    } catch (e) {
        return "0元";
    }
    return str;
}


///////////////////////////////////////////////定义日期方面的东西//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// date  PART////////////////////////////////////////////////////
//格式化日期 DateFormat('yyyy_MM_dd hh:mm:ss:SS 星期w 第q季度')
//格式化日期 DateFormat('yyyy_MM_dd hh:mm:ss:SS') 等等
myLittleCarrotForJS.formatTheDate = function (format, date) {
    if (!date) {
        date = new Date();
    }
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    var o = {
        "y+": date.getYear(), //year
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "h+": date.getHours(), //hour
        "H+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds(), //millisecond
        "w": Week[date.getDay()]
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;


}