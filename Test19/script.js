let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уше посмотрели ?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Сколько фильмов вы уше посмотрели ?",
        ""
      ).trim();
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastMovie = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      ).trim();
      const ratingMovie = prompt("На сколько оцените его?", "").trim();

      if (
        lastMovie != null &&
        ratingMovie != null &&
        lastMovie != "" &&
        ratingMovie != "" &&
        lastMovie.length < 50
      ) {
        personalMovieDB.movies[lastMovie] = ratingMovie;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYorGenres: function () {
    for (let i = 1; i <= 2; i++) {
      // for (let i = 1; i <= 3; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre == "" || genre == null) {
      //   console.log("Вы ввели некорректные данные или не ввели их вовсе");
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }

      let genres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();
      if (genres == "" || genres == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
