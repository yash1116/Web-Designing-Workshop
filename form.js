var a=setInterval(validate,10);
// alert("sdf")
function validate() {

	var formname =document.forms["Sign Up"];
	var fname=formname ['fname'].value;
	var lname=formname ['lname'].value;
	var email=formname ['email'].value;
	var phone=formname ['phone'].value;
	// console.log(fname);
	// var username=formname ['username'].value;

	document.getElementsById('fname').innerHTML= fname;
	// document.getElementsById("fname").innerHTML=fname;
	// document.getElementsById("lname").innerHTML=lname;
	// document.getElementsById("email").innerHTML=email;
	// document.getElementsById("number").innerHTML=number;
	// document.getElementsById("username").innerHTML=username;
}
// function validate() {

// 	var formname =document.forms["Sign Up"];
// 	var fname=formname ['fname'].value;
// 	var lname=formname ['lname'].value;
// 	var email=formname ['email'].value;
// 	var phone=formname ['phone'].value;
// 	var username=formname ['username'].value;
//    $("#fname").text(fname);