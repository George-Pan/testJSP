/**
 * Created by Administrator on 2016/7/28.
 */
var myResources = {
    pageWidth: 0,
    unitWidth: 142

};
//todo:选-模仿百度云设置行，防止图片任意浮动
//myLittleCarrotForJS.addEvent(document,"onload",function(){
//    myResources.pageWidth=myLittleCarrotForJS.getPageWidth();
//
//
//});
//todo:调整到domReady？
window.onload = function () {
    //悬停单元格，显示多选框&外边框
    myTools.EventUtil.addHandler(document.getElementById("grid-view"), "click", function (evt) {
        var targetNode = myTools.EventUtil.getTarget(evt);
        if (myTools.DomUtils.hasClass("grid-view-item")) {
        }
    });
    myTools.EventUtil.addHandler(document.getElementById("grid-view"), "click", function (evt) {
        var targetNode = myTools.EventUtil.getTarget(evt);
        if (myTools.DomUtils.hasClass("grid-view-item")) {
        }
    })

};
