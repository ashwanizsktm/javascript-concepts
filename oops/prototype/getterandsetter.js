/*jshint esversion: 6 */

// getter and seter with objects ..
// insid ethe object
//whenever we we call method outside as a property that's where
// getter comes
//when we want to send the manupulated data then we use getter and seter. 

var person = {
    name: 'ashwani',
    role:'se',
    
    // fn to convert name in to uppercase
    
    // getName: function() {
    //     return this.name.toUpperCase();
    // }

    // getter
    get getName() {
        return this.name.toUpperCase();
    },
    // we can set the value here itself not from outside


    set setname(value){
        this.name = value.toUpperCase();
    }
};

person.setname = 'rahul';
// here we are calling the function then getting the manupulated data,

// console.log(person.getName());

// with getter get the manupulated value itself. 
console.log(person);