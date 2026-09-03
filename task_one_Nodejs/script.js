alert ("welcome to my site ");
let userName =prompt("what is your name?");
document.write("welcome " + userName);



function sum( sum1, sum2){
    return sum1 + sum2;
}
let button = document.getElementById("sumBtn");
button.onclick = function(){
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let result = sum(parseInt(num1), parseInt(num2));
    document.write("The sum is: " + result);
}



function checkTemperature(temp) {

    console.log(temp >= 30 ? "HOT" : "Cold");

}

let  temperature = Number(prompt("Enter Temperature"));

checkTemperature(temperature);



function checkTemperature(temperature, actualFeel){

    if (temperature>=25 && temperature>=30 && actualFeel>=25&& actualFeel>=30){
        console.log("normal");
    }
    else if (  temperature < 25 &&
        actualFeel < 25){
            console.log("cold");
        }
        else if ( temperature > 30 &&
        actualFeel > 30){
            console.log("hot");
        }
        else{
            console.log("can't detect");
        }
}
 document.getElementById("checkBtn").onclick =function(){
    
    let temperature = Number(prompt("Enter Temperature:"));
    let actualFeel = Number(prompt("Enter Actual Feel Temperature:"));

    checkTemperature(temperature, actualFeel);
 } ; 


 

function checkFaculty(faculty) {

    switch (faculty) {

        case "FCI":
            console.log("You're eligible to Programming tracks");
            break;

        case "Engineering":
            console.log("You're eligible to Network and Embedded tracks");
            break;

        case "Commerce":
            console.log("You're eligible to ERP and Social media tracks");
            break;

        default:
            console.log("You're eligible to SW fundamentals track");
    }
}

let faculty = prompt("Enter your faculty");

checkFaculty(faculty);



function printOdd(start, end) {

    for (let i = start; i <= end; i++) {

        if (i % 2 != 0) {
            console.log(i);
        }

    }
}

let start = Number(prompt("Enter Start Number"));
let end = Number(prompt("Enter End Number"));

printOdd(start, end);




//bonas 
for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>Welcome to my page</h${i}>`);
}