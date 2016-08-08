/**
 * Created by Administrator on 2016/7/28.
 */
var myResources = {
    pageWidth: 0,
    unitWidth: 142

};
//todo:猜测：百度云设置行，防止图片任意浮动→拖动选中？
//todo:调整到domReady？
window.onload = function () {
    //悬停单元格，显示多选框&外边框

    //    }
    //});
    //由于mouseenter事件只能加到对应元素上，因此批量添加所有事件
    var gridViewItems = document.querySelectorAll("#grid-view .grid-view-item");
    for (var i = 0; i < gridViewItems.length; i++) {
        //myTools.EventUtils.addHandler(gridViewItems[i], "mouseenter", function (evt) {
        //    var targetNode=myTools.EventUtils.getTarget(evt);
        //    myTools.classUtils.addClass(targetNode, "hover-item");
        //});
        //myTools.EventUtils.addHandler(gridViewItems[i], "mouseleave", function (evt) {
        //    var targetNode=myTools.EventUtils.getTarget(evt);
        //    myTools.classUtils.remove(targetNode, "hover-item");
        //});
        myTools.EventUtils.addHandler(gridViewItems[i], "click", function (evt) {
            var targetNode = myTools.EventUtils.getTarget(evt);

        });
        myTools.EventUtils.addHandler(gridViewItems[i].querySelector(".checkbox"), "click", function (evt) {
            var targetNode = myTools.EventUtils.getTarget(evt).parentNode.parentNode;
            myTools.classUtils.add(targetNode, "item-active");

        });
    }};
    //myTools.EventUtils.addHandler(gridViewItems[i], "mouseleave", function () {
    //    myTools.classUtils.remove(gridViewItems[i], "hover-item");
    //});
    //myTools.EventUtils.addHandler(gridViewItems[i], "click", function () {
    //    if (myTools.classUtils.has(gridViewItems[i], "hover-item")) {
    //        myTools.classUtils.remove(gridViewItems[i], "hover-item");
    //    }
    //    myTools.classUtils.toggleClass(gridViewItems[i], "item-active");
    //
    //});
