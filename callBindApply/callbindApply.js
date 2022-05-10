/*jshint esversion: 6 */
//  call

let obj = {
  num: 3
};

let addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

// console.log(addToThis.call(obj, 3, 4));  //function.call(obj, funcArgs) the first args to be obj. 

var arr = [1, 2, 3];    //while using apply we pass an array that is the only difference.

// console.log(addToThis.apply(obj, arr));

//bind works little different it actully has to be stored inside the variable.
// and we pass it args inside the function of this.

var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));

// summary
/*
var obj = {num: 2};

var functionName = function(arg1, arg2, arg3) {
  return this.num + arg1 + arg2 + arg3;
}

//call. 
functionName.call(obj, arg1, arg2, arg3);

// Apply. 
functionName.call(obj, [arg1, arg2, arg3]);

// bind. 
 var bound = functionName.bind(obj);
 bound(arg1, arg2, arg3);
 
*/
