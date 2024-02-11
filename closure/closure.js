// In simple words A function bundled together with it's surrounding state (laxical environment) is called a closure.
/*
function x() {
    var a = 10;
    function y() {
        console.log(a)
    }
    y();
}
*/
// the above function can be rewritten as 
/*
function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
}

let z = x();
z();
*/

/*
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

let z = x();
z();
*/
// Output will be 100 bcz it's pointing to a in the memory which has been changed.

// ques -3.

/*
function z() {
    var b = 100;
    function y() {
        var a = 10;
        function x() {
            console.log(a, b)
        }
        return x();
    }
    return y();
}
z();
*/

/*
function addition(a, b) {
    const result = 'the result is: '
    function addValues() {
        let c = 3;
        return result + (a + b + c);
    } 
    return addValues()
}
const result = addition(4, 5);
console.log(result);
*/

// uses of closure
/**
 * Module design pattern
 * Currying => function returning other functions
 * Function like once
 * memoize
 * maintaing the state in a single world
 * setTimeOut
 * Iterators
 * and many more
 */

// closure + setTimeout
/*
function x() {
    i = 20;
    setTimeout(() => {
        var i = 1
        console.log(i)
    }, 0);
    console.log("next line")
}
x();
*/
// o/p: next line 1
/*
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * i);
    }
}
x();
*/

// it'll print 6 6 times after a second it's bcz it's referencing to the same points/ space in memory for i, incase of let bcz
// it'll print 1, 2,3,4,5 bcz it's a block scope it will reference to different memory location each time when loop runs
// this can be solved by using var also with help of closure.
/*
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(args) {
            setTimeout(() => {
                console.log(args)
            }, 1000 * args);
        }
        close(i);
    }
}
x();
*/
// diving deep to closures.
/*
   
function outest() {
    function outer() {
     //Either witing var a = 10 may be on top or doesn't make a diff still it's lexical scope environment.
    //  var a = 10;
      function inner() {
        console.log(a, b)
      }
      let a = 10;
      return inner();
    }
    return outer();
}
let b = 20;
outest();
*/

// Advantages:- 
// data hiding encaptuation

/*
var count = 0;
function counter() {
    var count = 0
     function increment() {
       count++
      console.log(count)
    }
    return increment;

}
// by this we can create multiple counter as an use case
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
*/

// here anyone from outside can access the counter so keep it inside and then aceessing an inner fn will make a closure 
// with benifits of data hiding

// disadvantes is that it always keeps the reference to it will not free up so it will consume the space in the memory

// but the modern browsers has smart garbage collection do remove the unwanted data from the momory like v8 engines
// let's see the below example

/*
function x() {
    var a = 10, b = 20;
    function y() {
        console.log(a)
    }
    return y;
    // if we the b is't getting used so it'll remove the b data by the garbage collection.
}
x();
*/

// let's see one example with Constructor
/*
function Counter() {
    var count = 0;
    this.increment = function(){
        count++ 
        console.log(count)
    }
    this.decrement = function() {
        count --;
        console.log(count);
    }
}

let counter1 = new Counter();
counter1.increment();
counter1.decrement();
*/