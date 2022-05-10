/*jshint esversion: 6 */

// A class is a bluprint for creating multiple objects of similar kind with help of constructor.
// lets say we have multipe objects of same kind
// then instead of created multipe objects we can create
// a class with their instance with help of constructors then
// leateest we can only pass the values and we can create as many objects as we want.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.email} is just logged in!`);
    return this;
  }

  logout() {
    console.log(`${this.email} is just logged out !`);
    return this;
  }

  updateScore() {
      this.score++;
      console.log(`${this.name} is score now ${this.score}`);
      return this;
  }
}

var userOne = new User("Ashwani", "ashwanizskt@gmail.com");
var userTwo = new User("rahut", "rahul@gmail.com");

// console.log(userOne);

// the 'new' keyword
// creates a new empty object {}
// - callls the constructor method. 

// methods can be used like this. 
/*
userOne.login();
userTwo.logout();
*/
// userOne.login();




// method chaining

// whenever we are trying to call one method on the other . 
//  this is method chaining. 
userOne.login().logout().updateScore();

