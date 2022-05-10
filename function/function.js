/*jshint esversion: 6 */
// factory function



// function currying
// using normal function
/*
function getSum(a){
  return function(b){
    return function(c){
      return function(d){
        return function(e){
          console.log(a+b+c+d+e);
        }
      }
    }
  }
}
*/

// using arrow funtion
const getSum = a => b => c => d => e => a + b + c + d + e;
const add = getSum(1)(2)(3)(4)(5);
console.log(add);