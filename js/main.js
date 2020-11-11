                /* 1 - Задание на Udemy курсе. */
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
                /* 2 - Задание на Udemy курсе.. */
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
                /* 3 - Задание на Udemy курсе.*/
let watchedFilm = prompt('Один из просмотренных фильмов'),
    gradeFilm = +prompt('Как вы оцениваете'),
    watchedFilm2 = prompt('Один из просмотренных фильмов'),
    gradeFilm2 = +prompt('Как вы оцениваете');    
    personalMovieDB.movies[watchedFilm] = gradeFilm;
    personalMovieDB.movies[watchedFilm2] = gradeFilm2;
    console.log(personalMovieDB);
