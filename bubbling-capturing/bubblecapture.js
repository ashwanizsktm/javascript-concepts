/*jshint esversion: 6 */

// By Default is false. ==> event bubbling.. from bottom to top (child to parent)
// True ==> Event capturing .. goes down from top to bottom (parent to child)

document.querySelector("#grandparent").addEventListener("click",() => {
    console.log("Grand Parent Clicked !");
  },
  false
);      //capturing if true  // bubbling if false

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    // if we want to stop the propagation we can simply use stop propagation
    e.stopPropagation();
    console.log("Parent Clicked !");
  },
  false
); //capturing if true  // bubbling if false

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked !");
  },
  false
); //capturing if true  // bubbling if false

//  we can change and see the mode of operation everytime..
