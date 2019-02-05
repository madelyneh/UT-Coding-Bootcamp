var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  try {
  // If an error is thrown, set threw to true
  func(x, y);
  }
  catch(error) {
    threw = true;
  }

  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  
  if (typeof x === "number" && typeof y === "number") {
    // throw an error if either x or y is not a number
    throw new Error("Both inputs must be a number.")
  }
  else return x * y;
};
console.log
console.log(assertThrows(multiply, 4, 5));
console.log(assertThrows(multiply, "something", "nothing thing"));
