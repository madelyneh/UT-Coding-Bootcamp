let axios = require('axios');
let fs = require("fs");
let divider = "\n ------------------ \n";

let TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    let URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios({
      method:'get',
      url: URL,
    })
      .then(function(response) {

        let data = response.data;
        // console.log("--------Data--------")
        // console.log(data);

        let showData = [
          "Show: " + data.name,
          "Genre(s): " + data.genre,
          "Rating: " + data.rating.average,
          "Network " + data.network.name,
          "Summary: " + data.summary
        ].join("\n\n");
  
        console.log("--------Show--------")
        console.log(showData);
        console.log("-------------------")
        
        fs.appendFile('log.txt', divider + showData, function(err) {
          if (err) throw err;
          console.log("Error: " + err);
        });
      });
  };

  this.findActor = function(actor) {
    // The following URL can be used to search the TV Maze API for a given show
    let URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios({
      method:'get',
      url: URL,
    })
      .then(function(response) {
  
        let data = response.data[0].person;
        // console.log(data);

        let actorData = [
          "Actor: " + data.name,
          "Birthday: " + data.birthday,
          "Gender: " + data.gender,
          "Country: " + data.country.name,
          "TVMaze URL: " + data.url
        ].join("\n\n");

        console.log("--------Actor--------")
        console.log(actorData);
        console.log("-------------------")

        fs.appendFile('log.txt', divider + actorData, function(err) {
          if (err) throw err;
          console.log("Error: " + err);
        });
  
      });
  };
};

module.exports = TV;
