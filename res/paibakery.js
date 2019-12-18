function h(){
	var ih1=document.getElementById('ihh');
	ih2=document.getElementById("ih2");
	ih3=document.getElementById("ih3");
	ih4=document.getElementById("ih4");
	ih5=document.getElementById("ih5");
	ih1.addEventListener("click",ih1c,false);
}
function ih1c(){

	document.getElementById('ih1').style.WebkitTransform = "  scale(10,5.5) translate(18px,-60px) ";
	

}
function ih2c(){
	document.getElementById('ih2').style.WebkitTransform = "  scale(10,5.5) translate(6px,-60px) ";
	ih1.addEventListener("click",ih1c,false);
}
window.onload = h;