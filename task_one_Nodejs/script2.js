 // this code started with calculateExpression
 // evel is taken the string to translate it to the calculateExpression
 
    function calculateExpression(expression) {
    return eval(expression);
}

document.getElementById("calculateBtn").onclick = function () {

  
    let expression = prompt("Enter a math expression:");


    let result = calculateExpression(expression);


    alert(
        "You entered: " + expression +
        ", and the result is: " + result
    );
};
// trim is clear the spaces from the start and the end of the string
// getFullyear is to get the current year 
let userName;
do {
  userName = prompt("please enter your name");
 
} while (!userName || !isNaN(userName) || userName.trim() === "");

let birthYear;
do {
  birthYear = prompt(" please enter your birth year ( must be a number and less than2010 )");
  birthYear = Number(birthYear);
} while (isNaN(birthYear) || birthYear >= 2010 || birthYear <= 0);


const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.write("Name: " + userName + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Age: " + age + "<br>");

// the debuger statment is used to fllow the code when we run the code in the browser

function calculateData(a, b) {

  debugger; 

  console.log("start of the calculate function...");
  console.log("Value of the first input a is:", a);
  console.log("Value of the second input b is:", b);

  let result = a + b;

  console.log("The final result is:", result);
  return result;
}


calculateData(10, 20);



function foo() {
    var x;
    x = 5;
    y = 6;
    return x + y;
}

console.log(foo());




"use strict"
function foo() {
    var x;
    x = 5;
    y = 6;
    return x + y;
}

console.log(foo());

// if removed the use strict the code will run but if we add the use strict the code will not run becose the y is not defined


var y;
y = 10;

x = 5;

console.log(x);
console.log(y);
var x;





// if we add the use strict the code will not run becose the x is not defined 
//لان الhoisting هورفع التعريف للمتغيرات الي الاعلي قبل تنفيذ الكود

var x = 5;

console.log(x);
console.log(y);

var y = 7;
// is not defined becose the y is defined after the console.log(y)and yhe hosting will not work with the use strict


 /*function test() {
    for (let i = 0; i < 10; i++) {
        alert(i);
        alert(x);
        let x = 10;
    }

    console.log(i);

}
 error1  Cannot access 'x' before initialization
 error 2  console.log(i);
 is not defined becose the let is block scope 
 */
