const numberOfFilms = +prompt("Сколько фильмов вы уше посмотрели ?" ,"")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
}

for (let i = 0; i < numberOfFilms; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
    const ratingMovie = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[lastMovie] = ratingMovie

}
    console.log(personalMovieDB);

