"use strict";
const Student = function (name, surname) {
  this.name = name;
  this.surname = surname;
};
Student.prototype.getStudentData = function () {
  const student = `${this.name} ${this.surname}`;
  return student;
};
