var cordx;
var cordy;

var tp = 0;

var choose = 0;
var count = 0;
var clr = Math.floor(Math.random() * 255);
var reverse = false;
var forward = true;
var accumulated = 0;
x="Heya! let's program Intelligence...        ";
var prev="";
var y="";
var i=0;
var bubble_pop=["img/bb_new.png","img/bb_new.png"];
function add(){y=x[i];document.getElementById("quote").textContent=prev+y;prev+=y;i++;if(prev=="Heya! let's program Intelligence...        "){prev="";i=0;add();}}

    
var timer=setInterval(add,150);


function move(image,speed){

var kl=image.style.top;
if(parseInt(kl)<1){
accumulated+=1;//to limit the number of items accumulated on top.
if(accumulated>0){
document.getElementById("img_container").removeChild(image);//this line renders
                                             //the few next lines useless.It's 
											 //optionally included, to get a different behaviour
accumulated=0;
var kkk=40;
image.src=bubble_pop[Math.floor(Math.random()*2)];
image.style.width=kkk+"px";
image.style.height=kkk+"px";

var bbc=setInterval(function(){
 if(kkk>60){clearInterval(bbc);document.getElementById("img_container").removeChild(image);}
 kkk+=3;
 image.style.width=kkk+"px";
 image.style.height=kkk+"px";
 
},60)//end setinterval
kkk=0;

}
clearInterval(interval);
}
var k2=parseInt(kl)-speed;
image.style.top=k2+"px";

if(clr==255 || clr==244){reverse=true;forward=false;}
if(clr==0 || clr==1){forward=true;reverse=false;}

if(forward){clr+=2;}
if(reverse){clr-=2;}




}

var images=["img/hab.png","img/hab2.png","img/hab2.png","img/hab3.png"];

function make_move(){

var choose;
chooseold=choose;
choose=Math.floor(Math.random()*14);
if (choose==chooseold) {choose=Math.floor(Math.random()*4);};
var image=document.createElement("img");

document.getElementById("img_container").appendChild(image);

var rn=Math.floor(Math.random()*4);
image.src=images[rn];

wth=Math.random()*50+30;
var lft=Math.random()*1300;
image.style.left=lft+"px";
image.style.top="400px";
image.style.width=wth+"px";
image.style.height=wth+"px";
image.style.opacity="0.7";


var vanish=function (){
var k=40;
image.src=bubble_pop[Math.floor(Math.random()*2)];
image.style.width=k+"px";
image.style.height=k+"px";
image.style.opacity="1";
image.onmouseover=function(){};
var bb=setInterval(function(){
 if(k>60){clearInterval(bb);document.getElementById("img_container").removeChild(image);}
 k+=3;
 image.style.width=k+"px";
 image.style.height=k+"px";
 
},60)//end setinterval
//

};//end onmouseover
image.onmouseover=vanish;
var speed2=Math.floor(Math.random()*5+1);
var interval=setInterval(function (){move(image,speed2);},50);

}

if($(window).width()>1000){ // limit it to window sizes with width>1000px
setInterval(make_move,3000);}








