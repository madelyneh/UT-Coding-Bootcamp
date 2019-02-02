let fs = require('fs');
let callback =  function(err) {
  if (err) {
    console.log(err);
  };
};

let student = function(name, favSubject, GPA) {
  this.name = name;
  this.favSubject = favSubject;
  this.GPA = GPA;

  fs.writeFile('log.text', student, callback);
};

module.exports = student;
