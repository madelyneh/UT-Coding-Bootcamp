// Write a function that takes an array of numbers and a function as parameters. The function paremeter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

let command = process.argv[2];
let input = Array.from(process.argv.slice(3));
const result = [];
let number = 0;

let math = {

  multiply: function(input) {
  
    for (let i = 0; i < input.length; i++) {
      number = (input[i] * 2);
      result.push(number);
    }
    return  result;
  },

  add: function(input) {
  
    for (let i = 0; i < input.length; i ++) {
      number = (parseInt(input[i]) + 1);
      result.push(number);
    } 
    return  result;
  },

  minus: function(input) {
  
    for (let i = 0; i < input.length; i ++) {
      number = (input[i] - 2);
      result.push(number);
    }
    return  result;
  },

  divide: function(input) {
  
    for (let i = 0; i < input.length; i ++) {
      number = (input[i] / 2);
      result.push(number);
    }
    return  result;
  },
};

let mathFun = function(command, input) {

  if (command === 'add') {

    math.add(input);
  } 
  else if (command === 'multiply') {

    math.multiply(input);
  } 
  else if (command === 'minus') {

    math.minus(input);
  }
  else if (command === 'divide') {

    math.divide(input);
  };

  console.log(result);
};

mathFun(command, input);