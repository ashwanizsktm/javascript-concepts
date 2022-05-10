// A closure is an inner function that has access to the outer function's variables in addition
// to it's own variables and global variables. The inner function has access not only to the outer 
// function's variables but also to outer function parameter. closure can be created bt adding a function
// inside another function.

function addNumbers(first, second){
    var returnValue = "The Result is: ";
    function add(){
        return returnValue + (first + second);
    }
    return add();
}

var result = addNumbers(5, 7);
console.log(result);