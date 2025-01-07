//Syntax error
// var greeting = "hi";
// console.log(greeting) // Won't be shown
//
// greeting = ."Hi" //Syntax error

// Early errors
// console.log("Howdy") //Won't be shown as error in function
//
// saySomething("Hello", "Hi")
//
// function saySomething(greeting, greeting) {
//     "use strict";
//     console.log(greeting) // SyntaxError: Duplicate parameter name not allowed in this context
// }


//Hosting errors
// function saySomething() {
//     var greeting = "Hello"
//
//     {
//         greeting = "Howdy" // here is error
//         let greeting = "Hi"
//         console.log(greeting)
//     }
// }
//
// saySomething() // ReferenceError: Cannot access 'greeting' before initialization

// Changing scope - BAD practice
// function badIdea() {
//     "use strict"; // Always use it else eval will change scope and oops variable will be part of function scope
//
//     eval('var oops = "Ugh"')
//
//     console.log(oops); //Reference error - if 'use strict' was applied
// }
//
// badIdea()