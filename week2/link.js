
function saveData() {
	var fname = document.getElementById("fname").value;
	alert(fname);
	sessionStorage.fname= fname;
}
function init(){
	var formdangki = document.getElementById("luutru");
	formdangki.onsubmid = saveData;
}
window.onload = init;