var mysql = require("mysql");
let inquirer = require("inquirer");
let item = require('./item'); 
let users = require('./users');
let bids = require('./bids');
let count;


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  questions();
});


let questions = function() {

  console.log("\nFirst Questions\n"); 

  inquirer.prompt([
    {
      name: "firstAction",
      message: "Would you like to POST AN ITEM or BID ON AN ITEM?",
      type: "list",
      choices:[
        "POST AN ITEM",
        "BID ON AN ITEM",
      ],
    },
  ]).then(function(answer) {
    let userResponse = answer.firstAction;
    console.log(userResponse);

    if (userResponse  === "POST AN ITEM") {

      inquirer.prompt([
        {
          name: "postItem",
          message: "What item would you like to post?",
          type: "input",
        },
      ]).then(newProduct(answer));
    }       
    return newBid();
    

  });
};
