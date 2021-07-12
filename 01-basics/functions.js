// Function - First-class Citizens in JS
// - not just syntax, can be treated as a value
// - Function expressions
// - Anonymous function
// - Function can be nested
// - Function can be returned
// - Function Hoisting
// - Functions can be supplied as a parameter to other function
// - Error First, Callback last
// - IIFE - Immediately Invoked Function Expression
// - Functions restricts the scope of the variables

// Executes First - Sync Code
// Testing the function body
// Configuration - Route Config
// restricts the scope of variables
// Avoids global pollution


// Scope chaining - 
// Lexical scoping - where the function actually present/created

// var x = 100;

// function a(){
//     // var x = 200;
//     function b(){
//         var y =300;
//         console.log(x);         // 100
//     }
//     console.log(y);         // NO
//     b();
// }

// a()

var x = 100;

// (function(){
    var x, y;
    x++;
    console.log("IIFE Called")
// })()

console.log(x);     // 100, 101




// function greet(err, data) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   setTimeout(function(){
//       console.log("Hello ", data.message);          // 3
//   }, 1000);
// }

// function EnglishGreet(arr, cb) {
//   setTimeout(function () {
//     if (arr.length > 3) {
//       console.log("Start")              // 1
//       cb(null, {message : "Package arrived"});
//       console.log("end");               // 2
//     } else {
//       cb(new Error("Too small"));
//     }
//   }, 3000);
// }
// // Higher Order Function (HOF)
// EnglishGreet([2, 4, 4, 5], greet);

// setTimeout(greet, 5000)

// JS Engine executes in two phase
//  - Phase I -> all function s and variables take place in the memory
//  - Phase II -> executes the assignments (=)

// Function Syntax
// function add (){ }
// creates "HOT SPOT" in momory
// executes faster

// Function Expressions
// var addition = function(){}
// - Runtime execution

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function () {
//         return 12;
//     }
// }

// console.log(mystery())          // 7, [7,7], undefined, null, 7
//           // 7, 12 -> ,

// var addition = function (num1, num2){
//     return num1 + num2
// }

// var str = "Some String";            // "Some String"

// // console.log(add(4,5))

// console.log(addition(2,3));      // undefined, [function add], null
