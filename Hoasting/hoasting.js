// Hoasting means we can call the function even before we have initialize it.

// variable with var is always hoisted it put the declaraction at the top. 

// named function is always hoisted to the browser where as anaonyms function does not.


// console.log(getName());

// function getName() {
//     console.log("Javascript");
// }

// Name="Ashwani";
// console.log(Name);
// var Name;

// here we calling the function even before declaring it.
// console.log(example());

/*
function example() {
    var a = 10;
    return a;
}
*/

// var x = 21;
// function myFunc() {
//     console.log(x);
//     var x = 20;
// }
// myFunc();

/*
Neither 21, nor 20, the result is undefined
Its because JavaScript initialization is not hoisted.
Why doesn,t it show the global value of 21? The reason is that when the function is executed, 
it checks that there,s a local x variable present but doesn,t yet declare it, so it won,t
look for global one. 
*/

// other similar kind of example
var x = 21;
function myFunc2() {
  setTimeout(() => {
    console.log(x);
  }, 1000);
  var x = 5;
}
myFunc2();

// incase of settime out it will return 5 bcz by the time settimeout runs it allocates x var
// if we do without settimeout it will not return undefined. 