/*jshint esversion: 6 */
/*
let userOne = {
    email: 'hari@dev.com',
    name: 'Hari',
    login() {
        console.log(this.email, 'has logged in !');
    },

    logout() {
        console.log(this.email, 'has logged out !');
    }
};
*/

// here updating the name inside obj
// userOne.name = "Hari";
// it can be updated deleted we can add properties to it

// it can be accessed in two ways either dot notation or bracket notation
// console.log(userOne.name);
// console.log(userOne['name']);

// when to use what let's take an example : -
/*
var cat = {
  property1: "meow",
  property2: "hiss",
};
*/
// objects keys are always found in the string .

/*
var x = "property2";
*/
// let's say if the object property needs to be updated then in that
// case we need to use [] notation, when using with variables.

// we can update as well !
// cat[x] = "new Hiss";

//console.log(cat.x);   // undefined
//console.log(cat[x]);  // hiss

// new example. 

/*
var dog = {
  attribute1: "loving",
  attribute2: "trueBlue",
};

// setting new property to cat object. 
cat['loving'] = "something cat's are not";
*/

// console.log( cat.dog.attribute1);
// TypeError: Cannot read property 'attribute1' of undefined

// console.log(cat[dog["attribute1"]]);  
// let's try in other way using variables.. 
/*
var x = dog;
var y = "attribute1";
*/
// console.log(cat[x[y]]);

// see documents about dot and bracket notation.
//  https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d

/*
// imp note
// var is (global scoped ) // window 
// and it can redeclared
/*
var x = 4;
console.log(this.x);
*/

const user1 = {
  mobile: 1993,
  name: "Ashwani"
}

Object.seal(user1);
user1.name = 'Rohit';
console.log(user1.name);  //Rohit

// in seal method we can modify the properties but can't add new properties to it.
user1.age = 26;
console.log(user1.age); //undefined