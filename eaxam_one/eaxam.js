function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("Hello World"));
console.log(reverseWords("JavaScript is fun"));

// we use here two split the frist one to split the sentence to words and the second one to sptit the word to letters 
// we use a map to make a array of the reversed words and the join is translat the array to string 
  

function gradeCalculator(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(gradeCalculator(85));
console.log(gradeCalculator(92));
console.log(gradeCalculator(150));



function processNumbers(numbers) {

    const doubled = numbers.map(number => number * 2);

    const evens = numbers.filter(number => number % 2 === 0);

    const sum = numbers.reduce((total, number) => total + number, 0);

    return {
        doubled: doubled,
        evens: evens,
        sum: sum
    };
}

console.log(processNumbers([1, 2, 3, 4, 5]));

//the filter method is used to create a newarray with all elements that pass the test implemented by the provided function
// the reduce method is used to combine all elements of array into single value 



 // the object task 
function extractUserInfo(user) {

    const {
        name,
        age,
        email = "No email provided"
    } = user;
    // using Destructuring 

    return `Name: ${name}, Age: ${age}, Email: ${email}`;
}

const user1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const user2 = {
    name: "Bob",
    age: 25
};

console.log(extractUserInfo(user1));
console.log(extractUserInfo(user2));




function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

//.... is the spread operator 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = mergeArrays(arr1, arr2);

console.log(result);




function createCounter() {

    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },

        decrement: function () {
            count--;
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

console.log(counter.count); // undefined 

// the let count is in the function createCounter() and it is not accessible outside the function but the in/decrement can access it 


function updateUser(user, updates) {
    return {
        ...user,
        ...updates
    };
}
// we use the spread operator to merge the two objects 

const user = {
    name: "mahmoud ",
    age: 18,
    city: "alminya"
};

const updates = {
    age: 19,
    country: "egypt"
};

console.log(updateUser(user, updates));




function analyzeArray(numbers) {

    const hasNegative = numbers.some(number => number < 0);
// the some method checks if at least one element in the array passes thefunction 
    const allPositive = numbers.every(number => number > 0);
 // the every method checks if all elements in the array pass the functhion
    const firstNegative = numbers.find(number => number < 0);
// the find method returns the first element in the array that satisfies the provided testing function

    return {
        hasNegative,
        allPositive,
        firstNegative
    };
}

console.log(analyzeArray([1, -2, 3, 4])); // true ,false, -2 
console.log(analyzeArray([1, 2, 3, 4])); // false ,true , undefined 