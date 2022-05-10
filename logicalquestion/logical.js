/*jshint esversion: 6 */

/*
for(var i = 0; i < 4; i++) {
    setTimeout(()=> {
      console.log(i);
    }, 1000);
}
*/

// it will print 4 , 4 times after 1 second
// because of closure that var is actually pointing to the same reference in the memory. 
// 2 ways of resolving it.. 

// 1. 
/*
for(let i = 0; i < 4; i++) {
    setTimeout(()=> {
      console.log(i);
    }, 1000);
}
*/

// it will print  0, 1, 2, 3.. 

// other way is ...

/*
for (var i = 1; i <= 4; i++) {
    (function (x) {
        setTimeout(function () { 
            console.log(x);
        }, 1000);
    })(i);
}
*/

// finding duplicates in the array
/*
let chars = [5, 6, 5, 2, 1];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
*/

let nums = [5, 6, 5, 2, 1, 7, 6];

// nums.forEach((item, id )=>  {
//  console.log(`index of items using indexOf(): ${nums.indexOf(item)} - Actual index ${id}`);
// });

// here it return the index of items from 0 to end it will retun the 
// same index of duplicates values 
//here it will return the indexes 
// 0 , 1, 0, 3, 4, 5, 1  => here it is returning the same index for duplcate valued index
// here 0th index is getting duplicate at 2nd index and 1st index is getting duplicated 
//  at last so we are getting like 1 at last index. 

// now we'll use fliter to flter it out


let uniqueNums = nums.filter((num, idx) => {
    return nums.indexOf(num) === idx;

    // if want to get the only duplicates then we just need to do reverse
  //  return nums.indexOf(num) != idx;
});

// it will return only when their index are eqaul so we get the unique items
// console.log(uniqueNums);

// simplest way in my opinion
/*
let b = [];
for (let a = 0; a < nums.length; a++) {
  if (b.indexOf(nums[a]) == -1) {
    b.push(nums[a]);
  }
}
*/

/*
function foo() {
    let a = b = 0;

    // these below 2 lines has nothing to do wtih the o/p in console 
    // it's just for twicking the mind. 

    a++;
    return a;
  }
  foo();
*/
  // console.log('typeof a: '+ typeof a);  //undefined
  // console.log('typeof b: '+ typeof b);  // number

//  typeof a is 'undefined'.
//  The variable a exists within foo() scope and not available in the outside scope.

//Let’s look at the line 2: let a = b = 0. This statement declares a local variable a.
// However, it does declare a global variable b.

// No variable b is declared neither in the foo() scope or global scope. 
// So JavaScript interprets b = 0 expression as window.b = 0. which turns type of b is number. 

 /*
  function sum(...inputs) {
    let total = 0;
    for(let i of inputs) {
     total =  total + i;
    }
    return total;
  }
*/
// function sum(a, b, c) {
//     return a + b + c;
//  }

// let res = sum(1,2,3,4,5,5,7); 

// if we have to get only one console then, we will see,

// function sum(a) {
//     return function(b){
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// it can be written in shorter syntex as 
/*
let sum = a => b => c => a + b + c;

console.log(sum(2)(3)(4));
*/

// can call in any way

// reversing the array without using methods

// reveese the loop 

//1. 

let arr = [1, 2, 3, 4, 5];

/*
let reversedArr = [];
for(let i = arr.length-1; i>=0; i--) {
    reversedArr.push(arr[i]);
} 
console.log(reversedArr);
*/

// 2 
var reversedArr = [];
 /* 
arr.map((val) => {
    reversedArr.unshift(val);
});
// console.log(reversedArr);
*/

// ways to empty an array

let a = [1,2,3];

// 1. 
/*
let b = a;
a = [];
console.log(a);
console.log(b);
*/

// 2. 
// a.length = 0;

// 3. 
// a.splice(0, a.length);
/*
while (a.length > 0) {
  a.pop(); 
}
console.log(a);
*/
// find the second largest element in the array. 

// so the logic here is we'll sort the array then we can get what we want.

// we'll use bubble sort to sort this. 
// in each 1 step greatest element goes to the last. 

/*
let myArr = [12, 4, 7, 13, 5];
let temp;
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length; j++) {
        if (myArr[j] > myArr[j + 1]) {
            let tmp = myArr[j];
            myArr[j] = myArr[j + 1];
            myArr[j + 1] = tmp;
        }
    }
  }
  console.log(myArr);
  */

  // now I can get what element I want
  // console.log(myArr[3]);

/*
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return   
  {
      bar: "hello"
  };
}

// Line breaking error 'return'.
console.log(foo1());  // bar : hello
console.log(foo2());  // undefined bcz of line break. 
*/

// Write a sum method which will work properly when invoked using either syntax below.
/*
console.log(sum(2,3));  
console.log(sum(2)(3));

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
*/
// Consider the code snippet below. What will the console output be and why?

/*
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
*/

// 1 will be the answer. 

/*
A closure is a function, along with all variables or functions that were in-scope at the time
  that the closure was created. In JavaScript, a closure is implemented as an “inner function”
 ; i.e., a function defined within the body of another function. An important
  feature of closures is that an inner function still has access to the outer function’s variables.
*/

//   Ques:=> How to reverse a string?
// Ans=>  
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  console.log(newString);
  return newString;
}
reverseString('hello');


