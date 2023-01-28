"use script";
class App {
  constructor() {}
  createMovie() {}
}

const app = new App();

const btnCreateMovie = document.querySelector(".btn__create-movie");

btnCreateMovie.addEventListener("click", function (e) {
  const title = document.getElementById("title").value.trim();
  const length = document.getElementById("length").value;
  const genre = document.getElementById("genre").value.trim();

  if (title && length && genre) {
    const movie = new Movie(title, length, genre);
    const html = `<p>${movie.getData()}</p>
    `;
    btnCreateMovie.insertAdjacentHTML("afterend", html);
    document.querySelector(".error").classList.add("hidden");
  } else {
    document.querySelector(".error").classList.remove("hidden");
  }
});
