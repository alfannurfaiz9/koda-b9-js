const movie = {
  id: 1,
  title: "Titanic",
  image: "kapal.jpg",
  genre: ["action", "comedy"],
  cast: [
    { name: "joko", role: "penjahat" },
    { name: "budi", role: "murid" },
  ],

  getMovieData() {
    console.log(
      `Title: ${this.title} \nGambar: ${this.image} \nGenre: ${this.genre}`,
    );
  },

  getCast() {
    for (let i = 0; i < this.cast.length; i++) {
      console.log(
        `${i + 1}. Nama: ${this.cast[i].name}, Role: ${this.cast[i].role}`,
      );
    }
  },

  setTitle(newTitle) {
    this.title = newTitle;
  },

  setImage(newImage) {
    this.image = newImage;
  },
};

movie.getMovieData();
movie.getCast();
movie.setTitle("Tukang bubur");
movie.setImage("gerobak.jpg");
movie.getMovieData();
