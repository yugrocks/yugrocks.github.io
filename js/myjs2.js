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
	}
	,2);
	elem.onmouseout=function(){
		clearInterval(intrvl);
		elem.style.webkitTransform='';
		clearInterval(intrvl);
	}
}
}


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
	
	}
	,40);
	elem.onmouseout=function(){
		clearInterval(intrvl);
		elem.style.webkitTransform='';
	}
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
rotate(document.getElementsByTagName("i")[0],20);
rotate(document.getElementsByTagName("i")[1],20)
rotate(document.getElementsByTagName("i")[2],20);
rotate(document.getElementsByTagName("i")[3],20);
translate(document.getElementsByTagName("i")[4],8);
rotate(document.getElementsByTagName("i")[9],8);
rotate(document.getElementsByTagName("i")[10],8);
rotate(document.getElementsByTagName("i")[11],8);
translate(document.getElementsByTagName("i")[12],6);
rotate(document.getElementsByTagName("i")[13],20);
rotate(document.getElementsByTagName("i")[14],20);
rotate(document.getElementsByTagName("i")[15],20);
rotate(document.getElementsByTagName("i")[16],20);
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
