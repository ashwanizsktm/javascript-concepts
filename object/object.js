// diffierence of object and bracket notaiton

var cat = { 
    property1: "meow",
    property2: "hiss",
};

var x = "property2";


// 
console.log(cat);
console.log(cat.x);  // here dot notation will give undefined. 
// so there comes the [] notation
// it update this one as well 

console.log(cat[x]); // hiss
cat[x] = "updated Property";
console.log(cat);

// imp: if we are getting some unexpected key like device no. like that from API 
// that we'll never be able to get using . operator so we use [] notation. 

// var let const.

var x = 'global';

function testVar() {
    if(x){
       let x = 'local';
        console.log(x);
    }

    console.log(x);
}
testVar();