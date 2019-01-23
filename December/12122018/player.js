let inquirer = require("inquirer");

let teamScore = 0;
let teamOffense = 0;
let teamDefense = 0;
let count = 0;
let playersArr = [];
let starters = [];
let subs = [];

function Players(name,position, offense, defence) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defence = defence;
  teamOffense = parseInt(teamOffense) + parseInt(offense);
  teamDefense = parseInt(teamDefense) + parseInt(defence);

  this.goodGame = function() {

    let randomNum = [Math.floor(Math.random() * 2)];
    console.log("Random #: " + randomNum);
    if (randomNum == 1) {

      this.offense++;
      console.log(this.name + "'s offence has gone up!\n----------");
      console.log("Offense: " + this.offense);
    } else {
      this.defence ++;
      console.log(this.name + "'s defence has gone up!\n----------");
      console.log("Defence: " + this.defence);
    };
  };

  this.badGame = function() {

    let randomNum = [Math.floor(Math.random() * 2)];
    console.log("Random #: " + randomNum);
    if (randomNum == 1) {
      this.defence ++;
      console.log(this.name + "'s defence has gone up!\n----------");
      console.log("Defence: " + this.defence);
    } else {
      this.offense--;
      console.log(this.name + "'s offence has gone down!\n----------");
      console.log("Offense: " + this.offense);
    };
  };

  this.printStats = function() {
    console.log("----------")
    console.log("Name: " + name);
    console.log("Position: " + position);
    console.log("Offense: " + offense);
    console.log("Defence: " + defence);
    // console.log("----------")
    // console.log("Team Offense: " + teamOffense);
    // console.log("Team Defence: " + teamDefense);
    // console.log("----------")

  };
};

let questions = function() {

  if (count < 3) {
    console.log("\nNEW PLAYER\n"); 

    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?",
      },{
        name: "position",
        message: "What position do you play?",
      }, {
        name: "offense",
        message: "What is your offense score?",
      }, {
        name: "defence",
        message: "What is your defence score?",
      },
    ]).then(function(answers) {

      let newPlayer = new Players(
        answers.name,
        answers.position,
        answers.offense,
        answers.defence,
      );
      playersArr.push(newPlayer);

      count++;

      questions();
    });
  
  } else {
    for (let i = 0; i < playersArr.length; i++) {
      playersArr[i].printStats();
      // playersArr[i].goodGame();
      // playersArr[i].badGame();

    };
  };
};

questions();

let playGame = function() {

  if(gameCount < 5) {

    let randomNumOne = Math.random() * (20 - 1) + 1;
    let randomNumTwo = Math.random() * (20 - 1) + 1;
    console.log("1: " + randomNumOne + " 2: " + randomNumTwo); 
  };
};