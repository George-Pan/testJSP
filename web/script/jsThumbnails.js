/**
 * Created by Administrator on 2016/7/28.
 */
var myResources={
    pageWidth:0,
    unitWidth:142

};
myLittleCarrotForJS.addEvent(document,"onload",function(){
    myResources.pageWidth=myLittleCarrotForJS.getPageWidth();


});


var elm =document.getElementsByClassName("grid-view-item");

myLittleCarrotForJS.addEvent(document.getElementsByClassName("grid-view-item"),"onclick",function(evt){
    alert("HelloWorld!");
    var pic=evt.target;
})