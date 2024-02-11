/*jshint esversion: 6 */
// factory function



// function currying
// using normal function
/*
function getSum(a){
  return function(b){
    return function(c){
      return function(d){
        return function(e){
          console.log(a+b+c+d+e);
        }
      }
    }
  }
}
*/

// using arrow funtion
/*
  const getSum = a => b => c => d => e => a + b + c + d + e;
  const add = getSum(1)(2)(3)(4)(5);
  console.log(add);
*/

// anynomous function 
// A fn without a name is called anynomous fn. this gets used a lot while adding eventListeners and when we use the fn
// as values. it can be used in function expression, have a look in the example..
// ex:-
/*
(function(){
console.log('anyonomous function')
})();
*/


// function statement or function declaraction : Both are same it is a direct normal function where we werite fn keyword with
// name and then the logic inside the block {}.

/*
function a() {
  console.log("running a function");
}
a();/

// function expression: - when we use function as a value assigned to the variable is known as function expression
/*
var b = function() {
  console.log("b called");
}
b();
*/

// what is the diff. then the difference is Hoasting the function declaration/statement is hoisted where as function
// expressions are not. 

/**
 * we can call function even before creating it. it doesn't matter the sequence.
  a();
  function a() {
    console.log("running a function");
  }
  // incase of function b there'll be TypeError: b is not a function..
 */

  // Named function expression
/*
  var b = function xyz() {
    console.log("b called");
  }
*/
// it'll return the same result. but we can't call xyz(); // it'll throw an error. uncaught reference error

// see docs. for pure and impure function
// https://dev.to/sanspanic/pure-vs-impure-functions-50aj.

// difference between arguments and parameters

/**
 function add(a, b) {
    return a + b;
}
 add(4, 5);

 // while calling the fn we pass values which is arguments, and when we receive the these values inside a fn
   function add(a, b) {}  ===> here inside a and b is called as parameters.
 */

//  First class functions:- this is one another jargons which we already use when we call a function inside another function
//  as an arguments it's called first class function in other words the abality to use fn as values wich can be used as variable
//  & and can paased inside afn as an arguments is known as First class Functions. there is one other jargons or names
//  to it First class Citizens.

/*
function result(sum) {
  return 'The Result is ' + sum;
}

function sum(a, b) {
    return a + b;
}
var getValue = result(sum(1, 2));
*/

/*
// This can be rewritten as: - 

  result(function sum() {
    let a=2; b = 1;
      return a + b;
  }
*/
// console.log(getValue);

// let's take an example of how javascript runs behind the scene.

var x = 1;
a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// to understand it how it works behind the scene put debugger on the 1st line in chrome dev tools

/**
 * so first the gobal execution context will be create and this will be divided in to 2 blocks the memory block and the 
 * code block so initially x will be assigned as undefined and for same for the function a and b momory will be allocated
 * with a : f a() and same for b now javascript will run the function a and if it finds any variable inside a it'll
 * repeat the same above steps and same for function b
 
 */

// the final outpu will be 10, 100, 1