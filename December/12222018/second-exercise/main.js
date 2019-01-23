var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",

  password: "root",
  database: "new_databaseDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  newFun();
});


let newFun = function() {

  connection.query("SELECT * FROM new_table", function(error, response) {
    if (error) throw error;
    console.log(response);
  });
 
  connection.end();
}