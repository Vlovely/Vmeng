window.onload=function(){
    var navBox1=document.querySelector('.li_box1');
    var navBox2=document.querySelector('.li_box2');
    var oLine=document.querySelector('.u_line');
    var navLis=document.querySelectorAll('.nav_ul>li');
    for(var i=0;i<navLis.length;i++){
        navLis[i].index=i;
        navLis[i].onmouseover=function(){
            var a=this.index;
            switch (a){
                case 0:oLine.style.opacity="1";
                    navBox1.style.display='block';
                    oLine.style.left=163+'px';break;
                case 1:oLine.style.opacity="1";
                    navBox2.style.display='block';
                    oLine.style.left=249+'px';break;
                case 2:oLine.style.opacity="1";
                    oLine.style.left=335+'px';break;
                case 3:oLine.style.opacity="1";
                    oLine.style.width='58px';
                    oLine.style.left=421+'px';break;
                case 4:oLine.style.opacity="1";
                    oLine.style.width='42px';
                    oLine.style.left=507+'px';break;
                case 5:oLine.style.opacity="1";
                    oLine.style.width='58px';
                    oLine.style.left=578+'px';break;
                case 6:oLine.style.opacity="1";
                    //oLine.style.width='42px';
                    oLine.style.left=665+'px';break;
                case 7:oLine.style.opacity="1";
                    //oLine.style.width='42px';
                    oLine.style.left=750+'px';break;
            }
        };
        navLis[i].onmouseout=function(){
            navBox1.style.display='none';
            navBox2.style.display='none';
            oLine.style.opacity='0';
        }
    }
    navBox1.onmouseover=function(){
        navBox1.style.display='block';
    };
    navBox1.onmouseout=function(){
        navBox1.style.display='none';
    };
    navBox2.onmouseover=function(){
        navBox2.style.display='block';
    };
    navBox2.onmouseout=function(){
        navBox2.style.display='none';
    };


    var flag = true;

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config1 = [
        {
            "width": 180,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 200,
            "top": 70,
            "left": 200,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 240,
            "top": 100,
            "left": 350,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 200,
            top: 70,
            left: 500,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 180,
            "top": 20,
            "left": 650,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config1[i], function () {
                flag = true;
            });
        }
    }

    assign();

    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config1.push(config1.shift());
            assign();
        }

    };
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config1.unshift(config1.pop());
            assign();
        }
    };

    var fixNav=document.getElementById('nav');
    var backTop=document.getElementById('icon_top');
    var fixed=document.getElementsByClassName('fixed')[0];
    var close=document.getElementsByClassName('fix_close')[0];
    var timer=null;
    close.onclick=function(){
        fixed.style.display="none";
    };
    var leader= 0,target= 0;
    if(scroll().top>60){
        fixNav.className="nav_act"
    }else{
        fixNav.className="nav"
    }
    if(scroll().top>600){
        backTop.style.opacity="1"
    }else{
        backTop.style.opacity="0"
    }

    window.onscroll=function(){
        if(scroll().top>60){
            fixNav.className="nav_act"
        }else{
            fixNav.className="nav"
        }
        if(scroll().top>600){
            backTop.style.opacity="1"
        }else{
            backTop.style.opacity="0"
        }

        leader=scroll().top;
    };
    backTop.onclick=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            var step=(target-leader)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            leader=leader+step;
            window.scrollTo(0,leader);
            if(target===leader){
                clearInterval(timer)
            }
        },15)
    };

    var mLis=document.querySelectorAll('.menus>li');
    var mCon=document.querySelectorAll('.cont');

    MouseOn(mLis,mCon,'now');

    var casLi=document.querySelectorAll('.cas_logo>li');
    var casCon=document.querySelectorAll('.cas_cont');
    var casImg=document.querySelectorAll('cas_logo li img');
    MouseOn(casLi,casCon,'now');

};
function MouseOn(li,div,cla){
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onmouseover=function(){
            for(var i=0;i<div.length;i++){
                div[i].style.display="none";
                li[i].className='';
            }
            div[this.index].style.display="block";
            this.className=cla;
        }
    }
}
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop||0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0
    };
}
function animate(obj,target){
    var flag=true;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var leader=obj.offsetLeft;
        var step=(target-leader)/10;
        step=step>0?Math.ceil(step):Math.floor(step)
        leader+=step;
        obj.style.left=leader+"px"
        if(leader!==target){
            flag=false;
        }
        if(flag){
            clearInterval(obj.timer)
        }
    },15)
}
