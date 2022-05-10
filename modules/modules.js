/*jshint esversion: 6 */

// default is going to be the one thing.

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}!`);
}

export function printAge(user) {
  console.log(`User age is ${user.age} old!`);
}

//  there are ways to export
// export default User;
// export {printName, printAge}
