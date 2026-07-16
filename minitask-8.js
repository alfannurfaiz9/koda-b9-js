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
    if (typeof newTitle === "string") {
      this.title = newTitle;
    } else {
      console.log("Judul tidak valid");
    }
  },

  setImage(newImage) {
    if (typeof newImage === "string") {
      this.image = newImage;
    } else {
      console.log("Gambar tidak valid");
    }
  },
};

movie.getMovieData();
movie.getCast();
movie.setTitle("Tukang bubur");
movie.setImage("gerobak.jpg");
movie.getMovieData();
