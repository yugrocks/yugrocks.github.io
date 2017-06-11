var element=document.getElementById('intro');
element.style.webkitTransform="translateY("+300+"px)";
document.getElementById('intro2').style.webkitTransform="translateY("+300+"px)";
document.getElementById('hobbies').style.webkitTransform="translateY("+400+"px)";
document.getElementById('skills').style.webkitTransform="translateY("+700+"px)";
document.getElementById('creations').style.webkitTransform="translateY("+1500+"px)";
document.getElementById('contact').style.webkitTransform="translateY("+1900+"px)";

var appear=function(div){
	div.style.transitionDuration="1s";
	div.style.webkitTransform="";
}





window.onscroll=function(){
    myFunction3([document.getElementById('img_container'),document.getElementById('intro'),document.getElementById('intro2'),document.getElementById('hobbies'),document.getElementById('skills'),document.getElementById('creations'),document.getElementById('contact')]);	
	
};



function myFunction2(da){
	if (da[0].getBoundingClientRect().bottom <= $(window).scrollTop()) {
		appear(da[1]);
		
	}		
	if (da[1].getBoundingClientRect().bottom +200<= $(window).scrollTop()) {
		appear(da[2]);
		
	}	
    if (da[2].getBoundingClientRect().bottom +400<= $(window).scrollTop()) {
		appear(da[3]);
		
	}		
}



function myFunction3(da){
	
	for(var i=0;i<da.length;i++){
		if(da[i].getBoundingClientRect().top<= $(window).scrollTop()){
			
			appear(da[i]);
		}	
	}		
}

