/*jshint esversion: 6 */
/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.email} is just logged in!`);
  }

  logout() {
    console.log(`${this.email} is just logged out !`);
  }

  updateScore() {
    this.score++;
    console.log(`${this.name} is score now ${this.score}`);
  }
}
*/
/*
class Admin extends User{ 
    // we can access user properties and methods. 
    deleteUser(user) {
        // console.log(user);
       users = users.filter(u => {
          return u.name != user.name;
       });
    }
}
*/

/*
var userOne = new User("Ashwani", "ashwanizskt@gmail.com");
var userTwo = new User("rahut", "rahul@gmail.com");
var admin = new Admin('dev', 'dev@123.com');
var users = [userOne, userTwo, admin];
*/

// admin.deleteUser(userTwo);
// console.log(users);
// accessing the user properties and methods..
// console.log(admin.login());    // here we are accessing the methods of user.



// let's take an another example to understand the inheritence concept.
// explain in interview..  this example. 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.myprops = "I am person class";
  }
  describe() {
    console.log(`My name is ${this.name} and I am ${this.age} years old!`);
  }
}

class Programmer extends Person {
  constructor(name, age, yearsofExp) {
    super(name, age);    
    //  we don't have to do this.name and this.age we can actually call
    //  the Person constructor by super. 
    this.yearsofExp = yearsofExp;
  }

  code() {
      console.log(`${this.name} is coding !`);
  }
}

let person1 = new Person('jeff', 45);
let programmer1 = new Programmer('dom', 56, 12);

console.log(person1);
console.log(programmer1);

// let's try to use person method and properties in programmer
// console.log(programmer1.describe());
// console.log(programmer1.myprops);

