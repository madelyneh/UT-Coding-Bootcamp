function digitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;

  this.feed = function() {

    if (this.hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;

    } else {
      console.log("No thanks! I'm full.");
      this.hungry = true;
      this.sleepy = false;

    };
  };

  this.sleep = function() {

    if (this.sleepy) {
      console.log("ZzzZzzZzzZzzz");
      this.increaseAge();  

    } else {
      console.log("No way! I'm not tired.");
    };
  };

  this.increaseAge = function() {
      
    this.age +=1 ;
    console.log("Happy Birthday to me! I am "+age+" old!")
  };

  this.play = function() {

    if (this.bored) {
      console.log("Yay! Let's play!");

    } else {
      console.log("Not right now. Later?");
    };
  };
};

let animals = {};

animals.dog = new digitalPal;
animals.dog.outside = false;
animals.dog.bark = function() {
  console.log("WOOF WOOF");
};
animals.dog.outside = function() {

  if (this.outside === false) {
    console.log("Go outside!");
    this.outside = true
  } else {
    console.log("the dog is outside");
  };
};
animals.dog.goInside = function() {

  if (this.outside === true) {
    console.log("Go outside please.");
    this.outside = false
  } else {
    console.log("already inside");
  };
};

animals.cat = new digitalPal;
animals.cat.houseCondition = 100; 
animals.cat.meow = function() {
  console.log("Meow meowwwww");
};
animals.cat.destroyFurniture = function() {
  if (this.houseCondition) {
    console.log("MWAHHAHAHAH That that furniture!");
    this.houseCondition -= 10;
    this.bored = false;
    this.sleepy = true;
  } else {
    console.log("The house is completely destroyed!");
  };
};
animals.cat.buyNewFurniture = function() {
  this.houseCondition += 50;
  console.log("Are you sure about that?");
};

let selectedPet = process.argv[2];
let method = process.argv[3];

animals[selectedPet][method]();
