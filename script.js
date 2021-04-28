//var a =document.getElementByClassName("para")
//a.innerHTML="Name";
var a=document.getElementById("para");
//onmouseover.addEventListener('onmouseover',onmouseover);
function mouseup(){
	a.onmouseover.innerHTML="Mouse is hovered";
}
function mousedown(){
	a.onmouseout.innerHTML="Hover your mouse";
}

//console.log(a);