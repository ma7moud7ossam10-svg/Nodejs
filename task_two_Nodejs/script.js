let tips = new Array(
    "Always use === instead of ==",
    "Use let and const.",
    "Practice JavaScript every day.",
    "Learn DOM Manipulation.",
    "Use meaningful variable names.",
    "Comment your code.",
    "Avoid global variables.",
    "Debug using console.log().",
    "Write clean code.",
    "Keep learning new ES6 features."
);

let random=Math.floor(Math.random()*tips.length);
 // displays a random tip from the tips array in the html element
 // the math.floor() method rounds down to the nearset integer 
 // the math.random() method generates a random number between 0 and 1
 // innerHtml is used to set or return the html content of an element 
document.getElementById("tip").innerHTML=tips[random];




function showDate(){

let today=new Date();

document.getElementById("result").innerHTML=
today.toLocaleString();

}
// toloaleString() method converts a data object to a string 



let email;

while(true){

email=prompt("Enter Your Email");

let at=email.indexOf("@");

if(at>0 && at<email.length-1){
    // indexof() method returns the position of the frist occurrence of a specifid value in a Sting
alert("Valid Email");
break;
}

else{

alert("Invalid Email");

}


}


let nameRegex = /^[A-Za-z]{3,}( [A-Za-z]{3,})+$/;

let name = prompt("Enter Full Name");

if(nameRegex.test(name)){
    alert("Valid Name");
}
else{
    alert("Invalid Name");
}




let grades = [60,100,10,15,85];

// Sort Descending

grades.sort(function(a,b){

return b-a;

});

document.write("<h2>Sorted Grades</h2>");

document.write(grades+"<br><br>");



let highest = grades.find(function(value){

return value<=100;

});

document.write("Highest Grade = "+highest);

document.write("<br><br>");

let failed = grades.filter(function(value){

return value<60;

});

document.write("Grades Below 60<br>");

document.write(failed);



function showDate(){

let birthDate = prompt("Enter Birth Date (DD-MM-YYYY)");

if(

birthDate.length==10 &&

birthDate.charAt(2)=="-" &&

birthDate.charAt(5)=="-"

){

let day = birthDate.substring(0,2);
// substring () method returns the part of the string between the start and end indexes, or to the end of the string.
let month = birthDate.substring(3,5);

let year = birthDate.substring(6,10);

let date = new Date(year,month-1,day);

alert(date.toDateString());

}

else{

alert("Wrong Date Format");

}

}