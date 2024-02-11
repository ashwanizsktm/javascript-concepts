// map, reduce and filter
// what is map?
const nums = [1,2,3,4];
/*
Higher order function
it takes a callback fn with three arguments items of an array, index of an array and
 last args is array itself. and always returns the new modified array
*/
/*
const multiplyTwo = nums.map((item, index, array) => item*2);
console.log(multiplyTwo);
*/

// let's create pollyfils for map
// arrow fn won't work here bcz it will take the window obj and it loses the context of this
/*
Array.prototype.myMap = function() {
    const temp = [];
    for(let i = 0; i< this.length; i++) {
        temp.push(cb(this[i]), i, this)
    }
    return temp;
} 

 const result = nums.myMap(num => num + 1);
 console.log(result);
*/

// filter: 
/*
    * higher order fn.
    * takes a callback fn as an argument with 3 args element, index & the array itself and return the new modified array.
    * The only difference is it will filter out some of the elements in the as the name implies.
 */

/*
    const filtered = nums.filter((num, inex, array) => num > 2);
    console.log(filtered);
*/

// let's create a polyfills for it.

Array.prototype.myFilter = function(cb){
    const temp=[];
    for(let i=0; i < this.length; i++) {
        
    }
}

