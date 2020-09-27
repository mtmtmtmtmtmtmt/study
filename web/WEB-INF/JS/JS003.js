//全选事件
function checkAllFun(){
    var lingshiObj = document.getElementsByTagName("input");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = true;
    }
}
//全不选事件
function AllNoCheckFun(){
    var lingshiObj = document.getElementsByTagName("input");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = false;
    }
}
//反选事件
function checkReverseFun(){
    var lingshiObj = document.getElementsByTagName("input");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = !lingshiObj[i].checked;
    }
}
//createElement事件写入HTML标签

window.onload = function(){
    var divObj = document.createElement("div");//创建div对象存放在内存中——<div></div>
    var textNodeObj = document.createTextNode("这是documnt.createTextNode方法创建出来的文本节点对象");//创建一个文本节点对象
    divObj.appendChild(textNodeObj);//向内存中的div对象中，加入文本节点对象
    document.body.appendChild(divObj);//向DOM对象中的body节点下加入子节点divObj
}