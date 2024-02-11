/*jshint esversion: 6 */

let counter = 0;

function getData() {
    // simulate and API call.
    console.log(`Fetching the data from APi ...${counter++}`);
}

function debounce(fn, delay) {
    let timer;
    // any statement can't be called after retutn keyword.
    return function () {
        let args = arguments;
        let self = this
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, delay);
    };
}

const callAPI = debounce(getData, 400);



