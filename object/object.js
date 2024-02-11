// diffierence of object and bracket notaiton

let cat = {
    property1: "meow",
    property2: "hiss",
};

let newProps = "property2";


// 
console.log(cat);
console.log(cat.newProps);  // here dot notation will give undefined. 
// so there comes the [] notation
// it update this one as well 

console.log(cat[newProps]); // hiss
cat[newProps] = "updated Property";
console.log(cat);

// imp: if we are getting some unexpected key like device no. like that from API
// that we'll never be able to get using . operator so we use [] notation. 
