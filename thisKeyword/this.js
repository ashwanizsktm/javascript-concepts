/*jshint esversion: 6 */

// method => obj
// function => globle(window, global)
// this inside object.
/*
const video = {
    title: 'video-title',
    play() {
        console.log("watching Video");
        console.log(this); //returns window objects
    }
};

video.stop = function() {
console.log(this);
// Again this referes to video object.
};
video.stop();
*/

// this inside function
/*
function myFunc() {
    console.log(this); // return window object
}
myFunc();

// in case of constructor fn it returns the obj let't see

function Video(title) {
    this.videotitle = title;
    console.log(this); //returns the new objects here
}

const video = new Video('Video title');
*/

const video = {
    title: 'the Title',
    tags: ['a', 'b', 'c', 'd'],

    //console.log(tag, this); //this returns window object here with normal function
    // so to overcome either we use arrow fn or use this in 2nd param.
    /*
    showTags() {
      this.tags.forEach(function(tag) {
        console.log(tag, this.title);      
      })
    }
    */
   /*
    showTags() {
        this.tags.forEach(function(tag) {
          console.log(tag, this.title);      
        }, this)
      }
    */

    //   or
     
    showTags() {
      this.tags.forEach(tag => {
        console.log(tag, this.title);      
      });
    }

};
video.showTags();
