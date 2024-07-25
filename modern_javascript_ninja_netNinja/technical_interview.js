/* filter & sort exercise 

const calls = [
  { name: "Jamie", numOfCalls: 7 },
  { name: "Robert", numOfCalls: 9 },
  { name: "Anne", numOfCalls: 2 },
  { name: "Jammy", numOfCalls: 14 },
  { name: "John", numOfCalls: 15 },
];

const orderCall = calls.sort((a, b) => b.numOfCalls - a.numOfCalls);

// show button

document.querySelector(".display-button").addEventListener("click", () => {
  document.querySelector(".display-list").innerHTML = "";
  orderCall.forEach((call) => {
    const li = document.createElement("li");
    li.innerHTML = `${call.name}: ${call.numOfCalls}`;
    document.querySelector(".display-list").appendChild(li);
  });
});

// input filter

document.querySelector(".input-filter").addEventListener("input", () => {
  const input = document.querySelector(".input-filter").value.toLowerCase();
  document.querySelector(".display-list2").innerHTML = "";
  orderCall.forEach((call) => {
    if (call.name.toLowerCase().includes(input)) {
      const li = document.createElement("li");
      li.innerHTML = `${call.name}: ${call.numOfCalls}`;
      document.querySelector(".display-list2").appendChild(li);
    }
  });
});
*/

/* Scope & types 

// Global scope

let bye = "bye";
console.log(bye);

// Local scope

function change () {
  bye = "hello";
  console.log(bye);
};
change();

// Block scope

var varVariable = "var";
let letVariable = "let";
const constVariable = "const";

function example() {
    
  
    if (true) {
      var varVariable = "var changed"; // This will change the value of varVariable
      let letVariable = "let changed"; // This declares a new letVariable in the block scope
      const constVariable = "const changed"; // This declares a new constVariable in the block scope
    }
  
    console.log(varVariable); // Outputs: "var changed"
    console.log(letVariable); // Outputs: "let"
    console.log(constVariable); // Outputs: "const"
  }
  
example();
console.log(varVariable); // Outputs: "var"
console.log(letVariable); // Outputs: "let"
*/

/* Closures 



function human(name) {
    function sayHi() {
      console.log(`Hi ${name}`);
    }
    function howYouFeel() {
      console.log(`How are you ${name}`);
    }
    return { sayHi, howYouFeel };
}

const john = human("John"); // in this moment the human function is called and the object created.
john.sayHi();
// from the moment the function is called, the name is stored in the closure
// therefore the human function is not called anymore, but the name is still stored in the closure


// The reason human("John") is not created at the moment you type john.sayHi() is because of how function calls work in JavaScript (and most programming languages).
// When you write const john = human("John");, you're calling the human function right away, and its return value (the object with sayHi and howYouFeel methods) is being assigned to john.
// At this point, john is an object, and you can call its methods like john.sayHi(). If the object wasn't created until you tried to call john.sayHi(), the JavaScript engine wouldn't know what john is or what sayHi method to call.
// In other words, john needs to already be an object with a sayHi method when you try to call john.sayHi(). That's why human("John") needs to be called when you declare john, not later when you try to call john.sayHi().


// if you put a querySelector the fuction will run from the moment you create the variable

function human1(name) {
    // This code will run when human("John") is called
    const button = document.querySelector("#myButton");
    button.style.display = "none";

    function sayHi() {
      console.log(`Hi ${name}`);
    }
    function howYouFeel() {
      console.log(`How are you ${name}`);
    }
    return { sayHi, howYouFeel };
}

const pep = human1("Pep"); // The button is hidden here
pep.sayHi();
 */

/* Coercion type 


// implicit coercion

let num = 5;
let str = "10";

// JavaScript implicitly coerces 'num' to a string, then concatenates the two strings
let result = num + str; 

console.log(result); // Outputs: "510"

// explicit coercion

let num1 = 5;
let str1 = "10";

// We explicitly coerce 'str' to a number using the Number function
let result1 = num1 + Number(str1); 

console.log(result1); // Outputs: 15

*/

/* Recurion (function that call itself) 

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(3)); // Outputs: 2
*/

/* create new object (without problems between Callstack and Heap)

const persona = {
    name: "John",
    age: 30,
}
// Problem

const clone = persona;
clone.name = "Pep";
console.log(persona.name); // Outputs: Pep
console.log(clone.name); // Outputs: Pep

// Solution
const clone = {...persona};
clone.name = "Pep";
console.log(persona.name); // Outputs: John
console.log(clone.name); // Outputs: Pep


 */



// PRACTICAL CODE


/* anagram 

function isAnagram (word1,word2){
    return word1.split("").sort().join("") === word2.split("").sort().join("");
}

console.log(isAnagram("listen","silent")); // Outputs: true

const listen = "listen";
const test = listen.split("");
console.log(test); // Outputs: [ 'l', 'i', 's', 't', 'e', 'n' ]
const test2 = test.sort();
console.log(test2); // Outputs: [ 'e', 'i', 'l', 'n', 's', 't' ]

*/ 

/* fizzbuzz

function fizzBuzz (n){
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else if (i % 5 === 0){
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(15)); // Outputs: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

 */

/* binary search 

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    console.log(end);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        console.log(mid);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1; // target not found
}

let array = [1, 5, 8, 12, 17, 21, 33, 34, 36, 39, 42, 47, 50];
console.log(binarySearch(array, 33)); // Outputs: 6
console.log(binarySearch(array, 1)); // Outputs: 0
*/

/* sequencial search 

const arrayOfNumbers = [];

function populateArray (){
    for (let i = 0; i < 100; i++){
        arrayOfNumbers.push(i);
    }
}

populateArray();
console.log(arrayOfNumbers);

function search(number){
    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] === number){
            return true;
        }
    }
    return false;
}

console.log(search(33)); // true


*/

/* palindrome 

function isPalindrome(word){
    word = word.toLowerCase().replace(/[\W_]/g, "");
    let reversedWord = word.split("").reverse().join("");
    
    if(word === reversedWord){
        console.log("It's Palindrome");
    } else {
        console.log("It is not Palindrome");
    }
}

console.log(isPalindrome("madam")); // Outputs: "It's Palindrome"

*/