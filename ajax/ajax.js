/*jshint esversion: 6 */

//AJAX (asunchronous javascript and xml)is a developer's dream, because you can:

// 1. Read data from a web server - after the page has loaded
// 2. Update a web page without reloading the page
// 3. Send data to a web server - in the background

// 1. An event occurs in a web page (the page is loaded, a button is clicked)
// 2. An XMLHttpRequest object is created by JavaScript. 
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page.
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript.

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference
// create element.

// let name = document.getElementById('name');
// name.insertAdjacentHTML("afterend", "<button class='btn'>Load Data</button>");

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if(this.readyState ==4 && this.status == 200) {
            let response =  JSON.parse(this.responseText);
            console.log(response);
            // prepareDom(response);
        }
    };
}

loadData();

// function prepareDom(data) {
//     // console.log(data[0].name);
//     let ul = document.createElement('ul');
//     ul.style.listStyle="none";
//     for(let i = 0; i < data.length; i++) {
//       let li = document.createElement('li');
//       li.textContent=data[i].name;
//       li.style.cssText=" background:#222; color:#fff; padding:10px; margin:10px 0; width:400px";
//       ul.appendChild(li);
//     }
//     name.insertAdjacentElement("afterend", ul);
// }

// document.querySelector('.btn').addEventListener('click', loadData);

