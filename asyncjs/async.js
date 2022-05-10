// console.log('first execution');

// setTimeout(() => {
//   console.log('second execution');
// }, 2000);

// console.log('third execution');

// callback

// promises: - As it's name suggests it works similar to the real world promises.
// it makes a promise to complete a work based on condition. if this
// is able to complete the task then it goes to then block(resolve => success) otherwise
//  it goes to catch block(reject => error).

// promises will have 3 states => 1.pending,  2.Fulfilled,  3.Rejected.

// EX. 1
/*
function bringMobile() {
  return false;
}

const getItems = new Promise((resolve, reject) => {
  if (bringMobile()) {
    resolve("Mobile is Available let's bring it !!");
  } else {
    reject("mobile is not available  can't bring it!");
  }
});

getItems
  .then((res) => {
    console.log('sucees => ' + ' ' + res);
  })
  .catch((err) => {
    console.log('Error =>', err);
  });
*/


const hasMeeting = true;

const meetings = new Promise((resolve, reject) => {
  if (hasMeeting) {
    const meetingDetails = {
      name: "Marketing Meetings ",
      location: "Indore.",
      time: "1:00 PM",
    };

    resolve(meetingDetails);

  } else {

    reject("Meetings is Already Scheduled!");

  }
});

// meetings.then(res => {
//   console.log(`the meeting is about ${res.name} happening at ${res.location}
//   on time ${res.time}`)
// }).catch(err => {
//   console.log(err)
// })

// chaing and using the above promises.

/*
function addToCalender(meetingDetails) {
  return new Promise(function(resolve, reject){
    const calender =  `${meetingDetails.name} is scheduled at ${meetingDetails.time} 
    in ${meetingDetails.location}`;
    resolve(calender);
  });
}
*/


// this can be written in short let's see that.

const addToCalender = params => {
  const calender =  `${params.name} is scheduled at ${params.time} 
  in ${params.location}`;
  return Promise.resolve(calender);
};


// chaining addtocalender promise over meetings promise to use their properties.
/*
meetings.then(addToCalender).then((res) => {
    console.log("Success => ", res);
  }).catch((err) => {
    console.log("Error => ", err);
});
*/


// there are cases where will be more than one promises then we would have to write
// multiple catch and then so we use promise.all()
// and that we want to resolve at the
// same time then, use promise.all  . Example:-

// const promise1 = Promise.resolve("Promise 1 is complete!");

/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is Complete!");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is Complete!");
  }, 2000);
});

*/

// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

// here promise 2 is getting resolved 2 sec later.
// To resolve all together there is promise.all.

// Promise.all([promise1, promise2]).then(res => console.log(res));

// in case we want to see first one promise rather than other promises.
/*
Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
*/

// Async await let's refer the prev example:-
/*
async function myMeetings() {
  try {
    const meetingDetails = await meetings;
    const message = await addToCalender(meetingDetails);
     console.log(message);
  } catch (error) {
    console.log(error);
  }
}
myMeetings();
*/



// Fetch Api:- fetch is a way to may API async request to different network. using GET POST PUT DELETE
// it actully return the promise
// to handle errors we don't use catch block instead we use
/*
fetch('https://jsonplaceholder.typicode.com/users/')
.then(res=>{
  if(res.ok) {
    console.log('SUCCESS !!');
  } else{
    console.log("Not SuccessFull !!!");
  }
})
.then(data => console.log(data));
*/

// now with options method
/*
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Priyanka',
    class: "singler"
  })
}).then(res => {
  res.json().then(data=> console.log(data));
});
*/


// callback function.
//  A callback function is a function (it an be any fn, =>, anonymous,) passed in to
// another function as an arguments, to run back it later is callback function.

// synchrounous callback.
/*
function run(a) {
  console.log("I am running at speed "+ a + '/kmph');
}

function show(callback){
  let speed = 10;
  callback(speed);
}

show(run);
*/

// this can be written in other way as well while calling function we are now gonna pass
//  function as args. ex:- the above one.
/*
function show(callback){
  let speed = 10;
  callback(speed);
}

show(function run(a) {
  console.log("I am running at speed "+ a + '/kmph');
});
*/

// Async Callbacks

// this message is callback fn it is getting exected after a period of time i.e. call back me later
// this helps to achive Async programming.
/*
const message = function() {  
  console.log("This message is shown after 2 seconds");
};
setTimeout(message, 2000);
*/

// this can be written as
/*
setTimeout(function message() {
  console.log("This message is shown after 2 seconds");
}, 2000);
*/

// or
// settimeout is also a callback function..

/*
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000);
*/

// console.log("Here is the first message");

// new async await video topics..

// async/ await makes the promise easy to work with

//  async word before a function means it will always return promise rather than values
// await can be used before any functions that returns a promise. the await keyword
// makes javascript wait util promise settels and returns

/*
async function ashwani() {
  console.log("inside ashwani functions");
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log("before response");
  const users = await response.json();
  console.log('users resolved!');
  return users;
}

console.log("before calling Ashwani");

let a = ashwani();

a.then(res =>  console.log("api data",res)).catch(err => console.log(err));

console.log("after calling ashwani");
console.log(a);
console.log("Last line of JS file");
*/
