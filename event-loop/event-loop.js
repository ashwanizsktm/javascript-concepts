/**
 * Javascript a synchronous single threaded language i.e it executes the code line by line i.e it can only do one task at a time
 * 
 */

/*
function a() {
    console.log("fun a executed");
}
a();
console.log("End of line");
*/

/**
 * so it will execute in a sequence 1st fun^ will be called then end of the line will be called. a() will take first 
 * place in the call stack & will create a global execution context, & then same for it will execute then the end of the line.
 */

/**
 * BROWSER
 * it has storage like local storage session storage and 
 */

/**
 * Browser web API's
 * 
 * SetTimeOut()
 * setInterval()
 *  fetch()
 * localStorage()
 * console()
 * location
 * this whole wep api will be accessed through window key. it's already in the window obj so we don't necessarily need to write 
 * window.setTimeOut and so on. it's 1 in the same thing.
 */

// it will print start end & after 1s it'll print callback till the start and end is getting executed from the call stack
// setTimeout will be in the callback queue and as soon as the timer ends it will be send to call stack by event loop & then
// it'll quickly executed.

// 1. example
/*
console.log("start");
setTimeout(() => {
    console.log("callback")
}, 1000);
console.log("end");
*/

// 2. example
/*
    console.log('Start');
    document.getElementById('btn').addEventListener('click', function cb(){
        console.log("callback");
    })
    console.log("end");
*/
// this will run exactly as explained over at the top it is preety much understandable from the code.


/*
1. When does the event loop actually start? 
Ans:-  Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`.
 It's always running and doing its job. ❤️ 

2.  Are only asynchronous web API callbacks are registered in the web API environment?
Ans - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't 
registered in the Web API environment. It's just those async callback functions that go through all this.

3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue?
Ans - Yes, the callback functions are stored, and a reference is scheduled in the queues.
      Moreover, in the case of event listeners(for example click handlers), the original callbacks stay
      in the web API environment forever, that's why it's advised to explicitly remove the listeners
      when not in use so that the garbage collector does its job.

4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
Ans: -No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty.
      So the 0 ms callback might have to wait for 100ms also if the stack is busy.
*/      

// important see images to understand the concept and how browser works behind the scenes.


// Trust issues with setTimeOut let's just see in the action.

/*
console.log("start")
setTimeout(function cb() {
    console.log("callback");
}, 3000);
console.log("end")
// Here we are blocking the main thread..

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 7000) {
    endDate = new Date().getTime();
}
console.log("while expires");
*/
// o/p of the above code will be start end then the main tread will be blocked for 7 seconds and then while expire will be brinted
// and last the callback will be printed bcz it is in the callback queue & it is monitered by the event loop whether the call stack
// is empty to run the web api setTimeout() once the while expire will be printed and call stack will be empty then the setimeout
// will be pushed to call stack & printed so the final out will be in console "start end while expires callback"

// Interview questions

console.log("start");
setTimeout(() => {
    console.log("callback");
}, 0);
console.log("end");

// the o/p will be printed start end callback not start callback end why because setTimeOut is web API's which'll be 
// in the callback queue monitered by event loop to get the space in the stack so once the start & end will be printed
// thereafter the callback will be printed. i.e o/p will be in console "start end callback"