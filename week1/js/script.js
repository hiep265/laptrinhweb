function caculateAge(yearborn){
	var currentTime= new Date();
	var currentYear= currentTime.getFullYear();
	return currentYear- yearborn;
}
var name= prompt("yourname:")
var yearborn= prompt("the year you were born:")
var age=caculateAge(yearborn);
console.log(name+" is "+ age+" years old ");
var message="";
if(age <18){
	message=message+"you are";

var i=0;
	while(i<5){
		message=message+" very";
		i++;
	}
}
message=message+" young";
console.log(message);
var gender = prompt("are you male or female? (male/female)")
switch(gender){
	case "male":
		console.log("you are a man");
		break;
	case "female":
		console.log("you are a woman");
		break;
	default:
		console.log("underfine");
}
var isClose= confirm("do you want to close current tap")
	console.log(isClose);
if(isClose=== true){
	console.log("bye bye");
} else{
	console.log("thank for staying with me");
}
