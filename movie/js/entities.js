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
