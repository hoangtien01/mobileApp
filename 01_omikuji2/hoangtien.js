"use strict";
window.addEventListener("DOMContentLoaded",function(){

    $("header").textillate({
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 2000,
        autoStart: true,
        in: {
            effect: "fadeInLeftBig", 
         delayScale: 1.5, 
          delay: 50, 
        sync: false, 
        shuffle: true
        }
    });

    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
        ScrollReveal().reveal("#btn1", { duration:9000});
    });
    setTimeout(
function () {

    let popmsg = "helo japan!";
    window.alert(popmsg);
      },
     "5000"
);
},false

);
    let soundEndflag="0";

    const btn1 = document. getElementById("btn1");
    const design2Text=document. getElementById("design2Text");
      btn1. addEventListener("click",
    function(){
        if(soundEndflag==="1")
        {soundControl("end","")}
    //let n =Math.floor(Math.random()* 3 );
   // switch(n){
        // case 0:
       // btn1.textContent="very happy!!";
        //btn1.style.color="#FF0000";
        //btn1.style.fontSize ="40px";
        //break;
        //case 1:
        //btn1.textContent="happy!";
        //btn1.style.color="#fff001";
        //btn1.style.fontSize ="30px";
        //break;
        //case 2:
        //btn1.textContent="unhappy...";
        //btn1.style.color="#261e1c";
        //btn1.style.fontSize ="20px";
        //break;
   // }

    
    let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
    let resultColor= ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
    let resultFontsize=["90px","80px","70px","60px","50px","40px"];
    let resultMaxspeed=[10,10,8,5,5,5];
    let resultMaxsize=[30,30,20,15,20,20];
    let resultImage=["img/tien.png","img/tien1.png","img/tien2.png","img/tien3.png","img/tien4.png","img/tien5.png"];
    let resultSound=["sound/tien.mp3","sound/tien1.mp3","sound/tien2.mp3","sound/tien3.mp3","sound/tien4.mp3","sound/tien5.mp3"];
    let n =Math.floor(Math.random() *resultText.length);
    design2Text.textContent = resultText[n];
    design2Text.style.color=resultColor[n];
    design2Text.style.fontSize=resultFontsize[n];
    
    w_sound=resultSound[n];
    soundControl("start", w_sound);
    soundEndflag="1";

    // snowfall stop
    $(document).snowfall("clear");

    setTimeout(
        function(){
    // jQueryのsnowfall
    $(document).ready(function(){
        $(document).snowfall({
       maxSpeed: resultMaxspeed[n],
       minspeed:1,
       maxSize: resultMaxsize[n],
       minSize:1,
       image : resultImage[n]
    });
    });
    },
    "200"
    );
    },false
    );

    let w_sound
    let music
    function soundControl(status,w_sound){
        if(status === "start"){
            music=new Audio(w_sound);
            music.currentTime=0;
            music.play();
        }else if(status==="end"){
            music.pause();
            music.currentTime=0;
        }
    }
    
