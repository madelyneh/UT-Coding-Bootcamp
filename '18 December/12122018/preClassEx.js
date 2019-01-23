//Write a function that takes in a string and if the string is a string representation of a number returns the negative version of that number otherwise throw and Error.

// Ex:
// Input: ‘1’
// Output: -1

//grab user input 

//turn string into integer

//if not number err

//if number add a negative sign before returning the new number.


let userInput = process.argv[2];

negative(userInput);

function negative(userInput) {

  if ( (typeof userInput) ===  "string") {
    // console.log("string");
    let value = parseInt(userInput);
    // console.log(value);

    if (value ==! NaN) {
      let negativeNum = "-" + value;
      console.log(negativeNum);

    } else {
      console.log("Error. Input is not a number. Try again.");
    };

  } else {
    console.log("Error. Input is not a string. Try again.");
  };
};

