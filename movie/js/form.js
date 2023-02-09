"use script";
class App {
  constructor() {
    (this.movies = []),
      (this.programs = []),
      document
        .querySelector(".btn__create-movie")
        .addEventListener("click", this.createMovie);
  }
  createMovie() {
    const title = document.getElementById("title").value.trim();
    const length = document.getElementById("length").value;
    const genre = document.getElementById("genre").value.trim();

    if (title && length && genre) {
      const movie = new Movie(title, length, genre);

      console.log(this.movies, movie);

      const html = `<p>${movie.getData()}</p>
      `;
      document
        .querySelector(".btn__create-movie")
        .insertAdjacentHTML("afterend", html);
      document.querySelector(".error").classList.add("hidden");
    } else {
      document.querySelector(".error").classList.remove("hidden");
    }
  }
}

const app = new App();

const btnCreateProgram = document.querySelector(".btn__create-program");

btnCreateProgram.addEventListener("click", function (e) {
  const date = document.getElementById("date").value;
  if (date) console.log(date);
  else {
    console.log("Date is mandatory");
  }
});
