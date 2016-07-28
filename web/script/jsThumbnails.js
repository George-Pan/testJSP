/**
 * Created by Administrator on 2016/7/28.
 */
alert("Hello!");
myLittleCarrotForJS.addEvent(document.getElementsByClassName("grid-view-item"),"onclick",function(evt){
    alert("HelloWorld!");
    var pic=evt.target
})