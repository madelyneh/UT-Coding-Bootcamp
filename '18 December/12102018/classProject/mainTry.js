// let characters = {

//   george = {
//     name = "George",
//     profession = "Plumber",
//     gender = "male",
//     age = 25,
//     strength = 8,
//     hitPoints = 9,
//   },

//   fred = {
//     name = "Fred",
//     profession = "Carpenter",
//     gender = "male",
//     age = 38,
//     strength = 7,
//     hitPoints = 5,
//   },

//   jeff = {
//     name = "Jeff",
//     profession = "Construction Woprker",
//     gender = "male",
//     age = 46,
//     strength = 9,
//     hitPoints = 7,
//   },
// };

function Character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function() {

    console.log("-------------------------");
    console.log("Name: " + name);
    console.log("--------");
    console.log("Profession: " + profession);
    console.log("Gender: " + gender);
    console.log("Age: " + age);
    console.log("Strength: " + strength);
    console.log("Hit Points: " + hitPoints);
    console.log("-------------------------");
  };
  
  this.isAlive = function() {
    return this.hitPoints > 0;
  };
  this.attack = function() {
    this.hitPoints -= attacker.strength;
  }
};

let jeff = new Character("Guy", "Plumber", "Male", 45, 489, 3983);
let george = new Character("George", "Carpenter", "Male", 25, 988, 6984);

