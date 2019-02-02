// Write code here to parse command line arguments and store them into variables
let axios = require('axios');
let command = process.argv[2];
let searchTerm = process.argv.slice(3).join(" ");
// toString(" ").replace(",", " ");
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

if (command == "actor") {
  console.log("This is the actor command \n" + "Actor: " + searchTerm);

  let url = "http://api.tvmaze.com/search/people?q=" + searchTerm;
  search(url);

} else if (command == "show") {
  console.log("This is the show command\n" + "Show: " + searchTerm);
  let url = "http://api.tvmaze.com/search/show?q=" + searchTerm;

  search(url);
};

 function search(url) {

  // let url = "http://api.tvmaze.com/search/shows?q=" + searchTerm;

  axios({
    method:'get',
    url: url,
  })
    .then(function(response) {

      let data = response.data;
      console.log("--------Date--------")
      console.log(data);
      console.log("-------------------")

    });
 };
