"use strict";
class App {
  constructor() {
    this.students = {
      total: 0,
      passed: 0,
      failed: 0,
    };
    document
      .querySelector(".form__submit")
      .addEventListener("click", this.submitForm);
  }

  calcFailedPerc() {
    const perc = Math.trunc((this.students.failed / this.students.total) * 100);
    return perc;
  }

  submitForm(e) {
    e.preventDefault();

    const exam = collectData();
    const isInputValid = validateData(exam);

    if (isInputValid) {
      const gradeDescription = exam.hasPassed() ? "passed" : "failed";
      displayExam(exam, gradeDescription);
      updateStats(exam, app);
    }
  }
}

const app = new App();
