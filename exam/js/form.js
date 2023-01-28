"use strict";

// validate form (form.js)
const collectData = function () {
  // need name and surname from one input
  const student = document.getElementById("name").value.trim().split(" ");
  const [studentName, ...studentSurnameArr] = student;
  const studentSurname = studentSurnameArr.join(" ");

  const pupil = new Student(studentName, studentSurname);
  const subject = new Subject(document.getElementById("subject").value);
  const exam = new Exam(subject, pupil, document.getElementById("grade").value);

  return exam;
};

const validateData = function (exam) {
  let nameValid, gradeValid;

  // Both name and surname should be provided and both should start with capitals.
  if (
    exam.student.name &&
    exam.student.surname &&
    exam.student.name[0] === exam.student.name[0].toUpperCase() &&
    exam.student.surname[0] === exam.student.surname[0].toUpperCase()
  ) {
    nameValid = true;
  } else {
    nameValid = false;
    alert(
      "Both name and surname should be provided and both should start with capitals."
    );
  }

  // A grade should be valid numerical value from 1 to 10.
  if (exam.grade > 0 && exam.grade <= 10) {
    gradeValid = true;
  } else {
    gradeValid = false;
    alert("A grade should be valid numerical value from 1 to 10.");
  }

  if (nameValid && gradeValid) return true;
  else return false;
};

const displayExam = function (exam, grade) {
  const html = `
    <div class="exams__row">
      <p class="exams__name">${exam.getExamInfo()}</p>
      <p class="exams__grade">${exam.grade}</p>
    </div>
  `;

  document
    .querySelector(`.exams__section--${grade}`)
    .insertAdjacentHTML("beforeend", html);
};

const updateStats = function (exam, app) {
  app.students.total++;
  document.querySelector(".statistics__total span").textContent =
    app.students.total;

  if (exam.hasPassed()) {
    app.students.passed++;
    document.querySelector(`.statistics--passed .statistics__num`).textContent =
      app.students.passed;
    document.querySelector(
      ".statistics--failed .statistics__perc"
    ).textContent = `${app.calcFailedPerc()}%`;
  } else {
    app.students.failed++;
    document.querySelector(`.statistics--failed .statistics__num`).textContent =
      app.students.failed;
    document.querySelector(
      ".statistics--failed .statistics__perc"
    ).textContent = `${app.calcFailedPerc()}%`;
  }
};
