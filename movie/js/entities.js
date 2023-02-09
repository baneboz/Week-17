"use script";
class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
  }
  getData() {
    const data = `${this.title}, ${this.length}min, ${this.genre
      .at(0)
      .toUpperCase()}${this.genre.at(-1).toUpperCase()}`;
    return data;
  }
}

class Program {
  constructor(date) {
    this.date = date;
    this.listOfMovies = [];
  }

  addMovie(movie) {
    this.listOfMovies.push(movie);
  }
  getData() {
    let programDuration = 0;
    let movies = "";
    this.listOfMovies.forEach(movie => {
      programDuration += +movie.length.slice(0, -3);
      movies += `\t\t${movie.title}, ${
        movie.length
      }, ${movie.genre.getData()}\n`;
    });
    const data = `${this.date}, program duration ${programDuration}min\n${movies}`;
    return data;
  }
}
