/*onClick事件*/
function onclickFun(){
    alert("这是静态注册的点击事件");
}
window.onload = function(){
    //1.获取标签对象
    var buttonObj = document.getElementById("button02");
    //2.通过标签对象.事件名 = function(){}注册事件
    buttonObj.onclick = function(){
        alert("这里是通过动态注册发生的按钮点击事件");
    }
}

function onblurFun(){
    console.log("这是静态注册的失去焦点事件，通过JS提供的console.log向控制台打印信息");
}
/*后面写的window.onload()事件会覆盖掉之前的window.onload()事件*/
window.onload = function(){
    var passwordObj = document.getElementById("password01");
    alert(passwordObj);
    passwordObj.onblur = function(){
        console.log("这是动态注册的失去焦点事件，通过JS提供的console.log向控制台打印信息");
    }
}
/*静态注册onchange事件*/
function onchangeFun() {
    alert("选择的零食已经改变了！");
    console.log("用户所选择的喜欢的零食发生了改变");
}
/*动态注册onchange事件*/
window.onload = function(){
    var selectObj = document.getElementById("select_yinliao");
    selectObj.onchange = function(){
        alert("选择喜欢的饮料已经发生了改变");
        console.log("用户所选择的喜欢的饮料发生了改变");
    }
}
/*表单提交事件，return false可以阻止表单提交*/
/*静态注册表单提交事件*/
function onsubmitFun(){
    alert("静态注册表单提交事件----发现不合法");
    console.log("在浏览器的控制台console写出日志，用户在使用表单提交时不合法（静态注册）（模拟情景）");

    return false;
}
/*动态注册表单提交事件*/
window.onload = function(){
    var submitObj = document.getElementById("form01");
    submitObj.onsubmit = function(){
        alert("动态注册表单提交事件----发现不合法(假装一下，模拟而已)");
        console.log("在浏览器的控制台console写出日志，用户在使用表单提交时不合法（动态注册）（模拟情景）");

        return false;
    }
}

function onclickFun_yanzheng(){
    //先获取对象
    var yonghumingObj = document.getElementById("yonghuming");
    //然后再获取对象的值
    var usernameText = yonghumingObj.value;
    //创建正则表达式用于验证
    //正则表达式规则：不能以下划线开头或结尾，必须同时包含下划线数字和英文字母，4-16位用户名
    var 正则表达式 = /^(?!_)(?!.*?_$)(?=.*[A-Za-z])(?=.*_)(?=.*[\d])([\w]{4,16})$/;
    //原来的正则表达式是：/^\w{5,12}$/
    //原来的正则表达式表示的意思是，用户名可以以大小写字母、数字和下划线组成，5-12位，但并不是必须同时包含这三者。

    //获取span对象，用于显示响应结果（后期会改用AJAX实现）
    var spanObj01 = document.getElementById("span_xiangying");

    //开始验证用户名是否合法
    //.test(String)方法可以用来验证String是否符合我的规则，如果符合返回true，不符合就返回false
    //因为刚刚搬家进山，网络不好，上不了百度找√和×的图标，所以用滑稽和口罩代替
    //如果符合的话就显示滑稽，如果不符合的话就显示口罩
    if(正则表达式.test(usernameText)){
        //.innerHTML方法可读可写，对所有HTML元素可用
        spanObj01.innerHTML = "<img src='../../static/img/滑稽.jpg' height='18' width='18'>";
    }else{
        spanObj01.innerHTML = "<img src='../../static/img/N95口罩.jpg' height='18' width='18'>";
    }

}
//全选事件
function checkAllFun(){
    var lingshiObj = document.getElementsByName("lingshi");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = true;
    }
}
//全不选事件
function AllNoCheckFun(){
    var lingshiObj = document.getElementsByName("lingshi");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = false;
    }
}
//反选事件
function checkReverseFun(){
    var lingshiObj = document.getElementsByName("lingshi");
    for(var i = 0; i < lingshiObj.length; i++){
        lingshiObj[i].checked = !lingshiObj[i].checked;
    }
}
