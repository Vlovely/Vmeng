/**
 * Created by miss on 2018-01-08.
 */
window.onload=function(){
    //动态获取

        var xhr = null;
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.open('get','js/getNews.php',true);
        xhr.send();

        xhr.onreadystatechange = function() {

            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {

                    var data = JSON.parse(xhr.responseText);

                    var oSpan = document.getElementById('content');
                    var html = '';
                    for (var i=0; i<data.length; i++) {
                        html += '<a href="#" class="not_i"><i></i>'+data[i].title+'</a>';
                    }
                    oSpan.innerHTML = html;
                } else {
                    alert('出错了,Err：' + xhr.status);
                }
            }

        }



    //自动增长
    var ospan1 = document.getElementById("5000");
    var ospan2 = document.getElementById("1000");
    var ospan3 = document.getElementById("3000");
    var ospan4 = document.getElementById("300");
    var ospan5 = document.getElementById("100");
    //alert(ospan1.clientY)
function numPlus(span,endNum){
    var num = 0;
    var t = setInterval(function(){
        num+=10;
        span.innerText = num;
        if(num==endNum){
            clearInterval(t);
        }
    },1);
}



    //导航
    var ling=document.querySelector('#login');
    var mask=document.querySelector('.mask');
    var gift=document.querySelector('.login_box');
    var moclose=document.querySelector('.close');
    ling.onclick=function(){
        mask.style.display="block";
        gift.style.display="block";
    };
    moclose.onclick=function(){
        mask.style.display="none";
        gift.style.display="none";
    };
    //正则
    var phone=document.getElementById('phone');
    var pass=document.getElementById('pwd');
    var span1=document.querySelector('.phone_error');
    var span2=document.querySelector('.pwd_error');
    phone.addEventListener('blur',function(){
        if(this.value===""){
            return;
        }
        var userPhone = /0?(13|14|15|18)[0-9]{9}/;
        if(userPhone.test(phone.value)){
            span1.innerHTML="";
        }else{
            span1.innerHTML="请输入正确的手机号";
        }
    });
    pass.addEventListener('blur',function(){
        if(this.value===""){
            return;
        }
        var userP = /^[0-9A-Za-z]{6,20}$/;
        if(userP.test(pass.value)){
            span2.innerHTML="";
        }else{
            span2.innerHTML="请输入正确的密码";
        }
    })
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
    //轮播
    var arrBan=document.querySelectorAll('.lunbo');
    var arrPage=document.querySelectorAll('.page>li');
    var timer=null;
    for(var i=0;i<arrPage.length;i++){
        arrPage[i].index=i;
        arrPage[i].onmouseover=function(){
            setTimeout(timer);
            for(var i=0;i<arrBan.length;i++){
                arrBan[i].style.display="none";
                arrPage[i].className='';
            }
            arrBan[this.index].style.display="block";
            this.className='page_active';
            pic = square = this.index;
        }
    }
    var pic=0;
    var square=0;
    timer = setInterval(playNext, 3000);
    function playNext() {
        pic++;
        if(pic>arrBan.length-1){
            pic=0;
        }
        if (square < arrPage.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for(var i=0;i<arrBan.length;i++){
            arrBan[i].style.display="none";
            arrPage[i].className='';
        }
        arrBan[square].style.display="block";
        arrPage[square].className='page_active';
    }
    //选项卡
    var tabsLeft=document.querySelectorAll('.tab_left>ul>li');
    var tabsRit=document.querySelectorAll('.tab1');
    var of1=document.querySelector('.bg_f1');
    Tabs(tabsLeft,tabsRit,of1);
    function Tabs(left,right,bg){
        for(var i=0;i<left.length;i++){
            left[i].index=i;
            left[i].onmouseover=function(){
                for(var i=0;i<right.length;i++){
                    right[i].style.display="none";
                    left[i].className=""
                }
                right[this.index].style.display="block";
                this.className="tab_active"
                switch (this.index){
                    case 0:bg.style.background='url("img/tb1.png")';break;
                    case 1:bg.style.background='url("img/tb2.png")';break;
                    case 2:bg.style.background='url("img/tb4.png")';break;
                    case 3:bg.style.background='url("img/tb3.png")';break;
                }
            }
        }
    }
    //鼠标悬浮变样式
    var arrF4=document.querySelectorAll('.f4>li');
    var f4h=document.querySelectorAll('.f4_h');
    for(var i=0;i<arrF4.length;i++){
        arrF4[i].index=i;
        arrF4[i].onmouseover=function(){
            for(var i=0;i<f4h.length;i++){
                f4h[i].style.opacityy="0";
                arrF4[i].className='';
            }
            f4h[this.index].style.opacityy="1";
            this.className='f4_active';
        }
    }

    for(var i=0;i<arrF4.length;i++){
        arrF4[i].index=i;
        arrF4[i].onmouseover=function(){
            for(var i=0;i<f4h.length;i++){
                f4h[i].style.opacityy="0";
                arrF4[i].className='';
            }
            f4h[this.index].style.opacityy="1";
            this.className='f4_active';
        }
    }

    var sub1=document.querySelectorAll('.sub1>li');
    var arrSub=document.querySelectorAll('.sub1 .sub_link');
    over(sub1,arrSub,'f3_subh');
    var sub2=document.querySelectorAll('.sub2>li');
    var arrSub2=document.querySelectorAll('.sub2 .sub_link');
    over(sub2,arrSub2,'f3_subh');
    var sub3=document.querySelectorAll('.sub3>li');
    var arrSub3=document.querySelectorAll('.sub3 .sub_link');
    over(sub3,arrSub3,'f3_subh');
    var sub4=document.querySelectorAll('.sub4>li');
    var arrSub4=document.querySelectorAll('.sub4 .sub_link');
    over(sub4,arrSub4,'f3_subh');
    var sub5=document.querySelectorAll('.sub5>li');
    var arrSub5=document.querySelectorAll('.sub5 .sub_link');
    over(sub5,arrSub5,'f3_subh');
    var sub6=document.querySelectorAll('.sub6>li');
    var arrSub6=document.querySelectorAll('.sub6 .sub_link');
    over(sub6,arrSub6,'f3_subh');
    function over(li,a,cla){
        for(var i=0;i<li.length;i++){
            li[i].index=i;
            li[i].onmouseover=function(){
                for(var i=0;i<a.length;i++){
                    a[i].style.display="none";
                    li[i].className='';
                }
                a[this.index].style.display="block";
                this.className=cla;
            }
        }
    }
    var oTurnL=document.querySelector('.btn_left');
    var oTurnR=document.querySelector('.btn_right');
    var move=document.querySelector('.f3_ul');
    oTurnL.onclick=function(){
        move.style.marginLeft="0"
    };
    oTurnR.onclick=function(){
        move.style.marginLeft="-1170px"
    };
    //返回顶部
    var backTop=document.getElementById('icon_top');
    var fixed=document.getElementsByClassName('fixed')[0];
    var close=document.getElementsByClassName('fix_close')[0];
    close.onclick=function(){
        fixed.style.display="none";
    };
    var leader= 0,target= 0;
    if(scroll().top>1000){
        backTop.style.opacity="1"
    }else{
        backTop.style.opacity="0"
    }
    if(scroll().top>4400){
        numPlus(ospan1,5000);
        numPlus(ospan2,1000);
        numPlus(ospan3,3000);
        numPlus(ospan4,300);
        numPlus(ospan5,100);
    }
    window.onscroll=function(){
        if(scroll().top>1000){
            backTop.style.opacity="1"
        }else{
            backTop.style.opacity="0"
        }
        leader=scroll().top;
        if(scroll().top>4400){
                    numPlus(ospan1,5000);
                    numPlus(ospan2,1000);
                    numPlus(ospan3,3000);
                    numPlus(ospan4,300);
                    numPlus(ospan5,100);
        }
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
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop||0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0
        };
    }
};

