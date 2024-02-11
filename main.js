/*jshint esversion: 6 */

// import User from './modules/modules.js';

// import allows us to change the name as well.

// import U from './modules/modules.js';
// if mutiple things to be impoted then
import User, { printName as printUserName, printAge } from './modules/modules.js';

const users = new User("Ashwani", 26);
console.log(users);

printUserName(users);
printAge(users);