var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

let logAndExecute = function(callback, message) {

  console.log(message);
  callback();
};

// Write a function that runs a function argument if
// its other argument is truthy.

let otherFunction = function(truthy, callback) {

  if (truthy) {
    callback()
  };

}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

let moreFunctions = function(callback, value) {

  return function() {
    callback(value);
  }
  
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

let callback = function(err){
  if (err){
    console.log(err);
  }};

fs.writeFile('log.txt', "Message?", callback);
