let numberOfFilms;

function start() {
  // numberOfFilms = +prompt("Сколько фильмов вы уше посмотрели ?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уше посмотрели ?", "").trim();
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель!");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYorGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYorGenres();
