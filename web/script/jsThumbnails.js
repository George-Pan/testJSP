/**
 * Created by Administrator on 2016/7/28.
 */
//todo:猜测：百度云设置行，防止图片任意浮动→拖动选中？
//todo:调整到domReady？
window.onload = function () {
    //批量添加所有事件
    var gridViewItems = document.querySelectorAll("#grid-view .grid-view-item");
    for (var i = 0; i < gridViewItems.length; i++) {
        //单击图片，打开预览窗口
        myTools.EventUtils.addHandler(gridViewItems[i], "click", function (evt) {
            var targetNode = myTools.EventUtils.getTarget(evt);

        });
        //单击checkbox,进入多选模式
        myTools.EventUtils.addHandler(gridViewItems[i].querySelector(".checkbox"), "click", function (evt) {
            var targetNode=myTools.EventUtils.getTarget(evt);
            myTools.classUtils.add(targetNode.parentNode.parentNode, "item-active");

        });
    }};

