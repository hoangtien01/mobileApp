"use strict";

let n = "";
let nBefore = "";
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

    const btn1 = document. getElementById("btn1");
      btn1. addEventListener("click",
    function(){
    btn1.style.transition="1s"
    let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
    let resultColor= ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
    let resultFontsize=["55px","50px","45px","40px","35px","30px"];
    let resultMaxspeed=[10,10,8,5,5,5];
    let resultMaxsize=[30,30,20,15,20,20];
    let resultImage=["img/tien.png","img/tien1.png","img/tien2.png","img/tien3.png","img/tien4.png","img/tien5.png"];
     
    while(n === nBefore){
       n = Math.floor(Math.random() *resultText.length);
    }
     nBefore=n;

   // let n =Math.floor(Math.random() *resultText.length);//
    btn1.textContent = resultText[n];
    btn1.style.color=resultColor[n];
    btn1.style.fontSize=resultFontsize[n];
    
  


    // snowfall stop
    $(document).snowfall("clear");

    // jQueryのsnowfall
    $(document).ready(function(){
        $(document).snowfall({
       maxSpeed: resultMaxspeed[n],
    
       maxSize: resultMaxsize[n],
   
       image : resultImage[n]
    });
    });
    },false
    );