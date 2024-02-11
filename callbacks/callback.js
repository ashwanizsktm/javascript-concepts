// what are callback in javascript
// javascript is synchronous and single-threaded language.

// the ability to pass a function inside another function as an argument "the function which is passed in other fn as argument 
// while calling is called as a callback function.

// example in the below example y is an callback fn. it gives the power to function x to run it according to it's need
// i.e call function y when your task is done sometimes later. this helps to run javascript asynchronously.

/*
function x(param) {
  param();
}
x(function y(){
    console.log("y function called")
})
*/

// a good example of it is setTimeout
/*
setTimeout(function() {
    console.log("running inside set time out");
}, 2000);
*/

// we use call back inside the event listeners
/*
document.getElementById('btn').addEventListener('click', function(){
    console.log("function clicked!!");
})
*/
// the anynomous fn inside the addEventListener is callback fn.

// example with closure.
/*
    let count = 0
    document.getElementById('btn').addEventListener('click', function(){
        console.log("function clicked!!", ++count);
    });
*/

// here each time we click btn we get the count value increased by 1 but the count is a global scope and we want to hide this 
// data the data encapsulation so we can keep insde a function to achive hiding the data the data and forming a closure.
// so the above code can be written as 

/*
function attachEventListeners() {
    let count = 0;
    document.getElementById('btn').addEventListener('click', function(){
        console.log("function clicked!!", ++count);
    });
}
attachEventListeners();
*/

// here we are accessing the lexical scope inside the callback fn the count which actually forms a closure.
// to understand a bit deep see the dev tools with call stack and scope.

// and the important thing is the garbage collection & remove event Listeners which means that the eventListeners 
// are heavy which will be in the memory occupuying the space and the same with the count Closure also. so at the
// end we remove the event listener to free up the space in the memory as EvenListeners are heavey.