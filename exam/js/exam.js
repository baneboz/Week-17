"use strict";
const Exam = function (subject, student, grade) {
  this.subject = subject;
  this.student = student;
  this.grade = grade;
};
Exam.prototype.getExamInfo = function () {
  const exam = `${this.subject.name} - ${this.student.name} ${this.student.surname}`;
  return exam;
};
Exam.prototype.hasPassed = function () {
  if (this.grade > 5) return true;
  else return false;
};
