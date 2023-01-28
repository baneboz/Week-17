"use strict";
const Subject = function (name) {
  this.name = name;
};
Subject.prototype.getSubjectName = function () {
  return this.name;
};
