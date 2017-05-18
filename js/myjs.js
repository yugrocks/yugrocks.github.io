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



var rotate=function(elem,max){
elem.onmouseover=function(){	
	var deg=0;
	rtd_anticlk=true;
	rtd_clk=false;
	var intrvl=setInterval(
	function(){
	
	if(deg==max)
	{rtd_clk=true;rtd_anticlk=false;}
	if(deg==-max){rtd_anticlk=true;rtd_clk=false;}
	if(rtd_clk){
	deg-=1;
	elem.style.webkitTransform="rotateZ("+deg+"deg)";
	}

	if(rtd_anticlk){	
	deg+=1;
	elem.style.webkitTransform="rotateZ("+deg+"deg)";
	}
	elem.onmouseout=function(){
		clearInterval(intrvl);
		elem.style.webkitTransform='';
		clearInterval(intrvl);
	}
	}
	,0);
}
}
rotate(document.getElementsByTagName("i")[7],14);
rotate(document.getElementsByTagName("i")[6],14);
rotate(document.getElementsByTagName("i")[5],14);



var translate=function(elem,max){
elem.onmouseover=function(){	
	var deg=0;
	rtd_anticlk=true;
	rtd_clk=false;
	var intrvl=setInterval(
	function(){
	
	if(deg==max)
	{rtd_clk=true;rtd_anticlk=false;}
	if(deg==-max){rtd_anticlk=true;rtd_clk=false;}
	if(rtd_clk){
	deg-=1;
	elem.style.webkitTransform="translateY("+deg+"px)";
	
	}

	if(rtd_anticlk){	
	deg+=1;
	elem.style.webkitTransform="translateY("+deg+"px)";
	}
	elem.onmouseout=function(){
		clearInterval(intrvl);
		elem.style.webkitTransform='';
	}
	}
	,40);
}
}

var translate_horizontal=function(elem,max){
elem.onmouseover=function(){	
	var deg=0;
	rtd_anticlk=true;
	rtd_clk=false;
	var intrvl=setInterval(
	function(){
	
	if(deg==max)
	{rtd_clk=true;rtd_anticlk=false;}
	if(deg==-max){rtd_anticlk=true;rtd_clk=false;}
	if(rtd_clk){
	deg-=1;
	elem.style.webkitTransform="translateX("+deg+"px)";
	
	}

	if(rtd_anticlk){	
	deg+=1;
	elem.style.webkitTransform="translateX("+deg+"px)";
	}
	elem.onmouseout=function(){
		clearInterval(intrvl);
		elem.style.webkitTransform='';
	}
	}
	,40);
}
}

translate_horizontal(document.getElementsByClassName("carousel-control")[0],6);
translate_horizontal(document.getElementsByClassName("carousel-control")[1],6);
translate(document.getElementsByTagName("i")[0],8);
translate(document.getElementsByTagName("i")[8],8);
rotate(document.getElementsByTagName("i")[9],20);
rotate(document.getElementsByTagName("i")[10],20);
rotate(document.getElementsByTagName("i")[11],20);
rotate(document.getElementsByTagName("i")[12],20);
rotate(document.getElementById("btn_grp"),20);
translate(document.getElementById("send"),5);

translate(document.getElementById("msg_button"),7);

var allLinks = document.getElementsByTagName('a');


//to disable default behaviour
for(cntr=0;cntr<allLinks.length;cntr++){
	var lnk=allLinks[cntr];
	if ((lnk.href && lnk.href.indexOf('#') != -1)){
	lnk.addEventListener("click", function(event){
    event.preventDefault();
});
}
}

var showView=function(viewId){
	document.querySelector('#'+viewId).scrollIntoView({ 
  behavior: 'smooth' 
});
}



document.getElementById('showskills').onclick=function(){
	showView('skills');
	
};


document.getElementById('showabout').onclick=function(){
	showView('about');
	
};


document.getElementById('showabout2').onclick=function(){
	showView('about');
	
};


document.getElementById('showcontact').onclick=function(){
	showView('contact');
	
};


document.getElementById('showcreations').onclick=function(){
	showView('creations');
	
};

document.getElementById('home').onclick=function(){
	showView('body');
};




