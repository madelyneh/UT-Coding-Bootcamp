//Write a function that takes an array of numbers and returns an array with each number doubled. 

let input = Array.from(process.argv.slice(2));

let double = function(input) {
  let result = [];

    for (let i = 0; i < input.length; i++) {
      let number = (input[i] * 2);
      result.push(number);
    };

  console.log(result);
};

double(input);