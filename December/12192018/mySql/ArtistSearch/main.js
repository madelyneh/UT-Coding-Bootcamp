var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {

  input = process.argv[2];
  // WHERE title = ${input}

// interpolation
  connection.query(`SELECT * FROM songs`, function(error, response) {
    if (error) throw error;

    for (let i = 0; i < response.length; i ++) {
    let title = response[i].title;
    let genre = response[i].artist;
      if (genre === "pop") {
        console.log()
      }

    console.log("-----SongTitle-----");
    console.log(title);
    };

    console.log(response);
    connection.end();
  });

}
