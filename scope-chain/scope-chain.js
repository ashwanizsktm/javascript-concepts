// scope in javascript is directly related to lexical environment.
/*
function a() {
    c();
    function c() {
        console.log(b);
    }
    var b = 10;
}
a();
*/

// To understand the core open crome dev tools and put debugger.
// lexical environment is created whenever the global execution context is created.


// console.log(this.b); // this can be accessed with window.a or b or this.b this is in the global space.

// let and const

// variable with let and const is hoisted but in the temporal dead zone for the time being.
/*
console.log(a) // Reference Error: - can't access a before it's initialization. bcz in temporaldeadzone it is undefined
let a = 10;  // this a will be in the special memory space called script
*/

// 3 types of error 
//1. Referece Error: - Can't access a before it's initialization. 2,

//  console.log(x): - if this won't find in the memory space then it'be Reference Error: - x is not defined
/*
let a = 10;
let a = 100;
console.log(a);  //Uncaught SyntaxError: Identifier 'a' has already been declared (at scope-chain.js:31:5)
*/

// variable with const can not be reassigned. we can't write const a = 10; & later on we try to update with other value like
// a = 100; // typeError:- can't reassign the value to const variable.

// block scoped
// let's understand the block:- the block is  {}.
/*
{
    // compound statement :- we write multiple statement inside a block that's why we called it as comp^ statement
}
*/

// let and const is blocked scope whereas var is global scope let's see in action
/*
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
*/

// shadowing in javascript
