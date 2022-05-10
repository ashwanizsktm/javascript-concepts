/*jshint esversion: 6 */

// Arrow functions are not hoiseted bcz it is function expression.
// we don't need the retun keyword with arrow function

let sum = (a, b) => a + b;
console.log(sum(5, 7));

const message = a => `Hello ${a}`;

console.log(message("AShwani"));

// Arrow fn is great bcz of way of writing it in a consize way
// but it plays an important role when it comes to "this" keyword. 
// it actully resolves the problem that comes with normal function handling this.

class Person{
    constructor(name) {
      this.name = name;
    }

    PrintNameArrow() {
        setTimeout(() => {
            console.log('Arrow Fn=> ',this.name);  // this refers current class.
        }, 1000);
    }

    PrintNameFunction() {
        setTimeout(function() {
            console.log('normal Function =>', this.name);   // this refers window here.
        }, 1000);
    }

    // to resolve the above method with normal fn we need to write.
    /*
    PrintNameFunction() {
        let _self = this;
        setTimeout(function() {
            console.log('normal Function =>', _self.name);   // this refers class name here now.
        }, 1000);
    }
    */
}

const person  = new Person("ashwani");
person.PrintNameArrow();
person.PrintNameFunction();