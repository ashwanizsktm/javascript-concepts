/*jshint esversion: 6 */

let counter = 0;

function getData() {
    // simulate and API call.
    console.log(`Fetching the data from APi ...${counter++}`);
}

 function debounce(fn, delay) {
    console.log("hellow world !");
   let timer;
  // any function can't be called after retutn keyword.
   return args => {
        clearTimeout(timer);
       timer = setTimeout(() => {
           fn.apply(this, args);
       }, delay);
   };
}

function callAPI() {
    debounce(getData, 500);
}

// const callAPI =  debounce(getData, 1000);



