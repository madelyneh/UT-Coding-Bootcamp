let student = require('./student');


let classroom = function(teacherName, roomNumber) {

  this.students = [];
  this.teacherName = teacherName;
  this.roomNumber = roomNumber;

  this.addStudent =  function(name, favSubject, GPA) {
    this.students.push(new student(name, favSubject, GPA));
    
  }


}


module.exports = classroom;