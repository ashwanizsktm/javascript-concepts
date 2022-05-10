
/*jshint esversion: 6 */

// prototype simple example to understand

/*
function Mobile(modal, price) {
    this.modal_no = modal;
    this.price = price;
    this.isReliable = true;
}
var sumsung = new Mobile(3310, 6000);
var nokia = new Mobile(1200, 7988);

console.log(sumsung);
console.log(nokia);
*/

// the above same can be written as class as well both serve the same purposes
/*
class Mobile {
  constructor(name, modal) {
    this.name = name;
    this.modal = modal;
    this.color = "red";
  }

  // class can have methods
  playGame() {
    console.log(`Game can be played on ${this.name}`);
  }
}

let mobile = new Mobile("Samsung", 3310);
console.log(mobile.playGame());
*/
//

// prototype..  
// we will see prototype and prototype inhetence. 
// now we can create as many objects from this constructor functions as we want.
// so let's say we have this boilerplate to create the object but what if we want to add
// extra properties and methods to it, we can add it directly there but suppose that
// constructor function boiler plate is in some other file or somewhere else like an api and we 
// need to add methods and properties to it then prototype comes in. 


function Person(fname, lname) {
  // Instance member
   this.firstName = fname;
   this.lastName = lname;
   this.isMarried = false;
}

//  prototype member. 
Person.prototype.color = "white";
Person.prototype.getFullName = function() {
console.log(`FullName: ${this.firstName} ${this.lastName}`);
};
// these properties and methods will not get directly added to
// Person object, it will actually be the prototype methods and properties to
// the Person object.
 
let person1 = new Person('Ashwani', 'Singh');
let person2 = new Person('Rahul', 'kumar');

// console.log(person1.firstName);   // Ashwani
// accessing their properties and methods
// console.log(person1.color);
// console.log(person1.getFullName());


// let's achive prototype inheritence  
// in constructor function,, => this way we can get the args of parent constructor Method. 

function Developer(fname, lname, profile ) {
  Person.call(this, fname, lname);
  this.profile = profile;
}

// let's inherit person prototype methods and properties
// when we inherit the mothod and properties of Person.prototype then it achives 
// prototype inhetence.
Developer.prototype = Object.create(Person.prototype);
let developer1 = new Developer('Ashwani','singh','Frontend Engineer');
let developer2 = new Developer('Rahul','kumar','Backend Engineer');

// and we will also be able to access the prototype properties and methods of 
// person inside the developer. and normal properties as well. 

console.log(developer2);
console.log(developer2.getFullName());  
console.log(developer2.color);

//getfullname and color are prototype properties and methods of a person class. 

































// not to explain in the interview explaing other above one/

// let's see another example!
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login =  function() {
    this.online = true;
    console.log(this.email, 'has logged in !');
};

User.prototype.logout =  function() {
  this.online = true;
  console.log(this.email, 'has logged out !');
};

function Admin( role,...arg) {
  User.apply(this, arg);
  this.role = role;
}

// this line should be right after Admin cnx fn bcz we are inheriting here all user __proto__ 
Admin.prototype = Object.create(User.prototype);
// if we want to create new prototype methods and prperties it shoutd be 
// right after the inherited parent prototype. 
//now Freshly creating the Admin prototype methods so that we can use it for user
Admin.prototype.deleteUser = function(u) {
  // console.log("function params email===>",u.email);
  users = users.filter(user => {
    // console.log("filter params email===>",user.email);
    return user.email != u.email;
  });
};

var userOne = new User('Ashwani@123.com', 'Ashwani');
var userTwo = new User('Abhish@123.com', 'Abhish');
var admin = new Admin('superAdmin','admin@123.com', 'Admin');

var users = [userOne, userTwo, admin];
// console.log(users);
admin.deleteUser(users[2]);
// console.log(users);
