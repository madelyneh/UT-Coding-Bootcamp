var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {

  input = process.argv[2];

// // concatenation
//   connection.query("SELECT * FROM products WHERE id =" + id, function(error, response) {
//     if (error) throw error;
//     console.log(response);
//     connection.end();
//   });

// interpolation
  connection.query(`SELECT * FROM products WHERE id = ${input}`, function(error, response) {
    if (error) throw error;
    console.log(response);
    connection.end();
  });

  // // interpolation STRING
  // connection.query(`SELECT * FROM products WHERE flavor = "${input}"`, function(error, response) {
  //   if (error) throw error;
  //   console.log(response);
  //   connection.end();
  // });

}
