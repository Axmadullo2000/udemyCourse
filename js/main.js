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
              /*Extra home-task*/
let numProj = +prompt("Сколько проектов вы выполнили?");
let dataBaseProjects = {
    projects: {},
    quality: {},
    private: true
};
const projectFavourite = prompt("Напишите название вашего наилучшего проекта : ");
gradeProject = +prompt("Насколько оценил её клиент : ");
projectBadly = prompt("Напишите название вашего наихудшего проекта : ");
gradeBadProject = +prompt("Насколько оценил её клиент : ");
dataBaseProjects.projects[projectFavourite] = gradeProject;
dataBaseProjects.projects[projectBadly] = gradeBadProject;
let firstProjectQuality = prompt("Напишите качество проекта которого выполнили в первый раз : ");
graderYourself = +prompt('Насколько вы оценили её');
LastProjectQuality = prompt("Напишите качество проекта которого выполнили в последний раз : ");
LastgraderYourself = +prompt('Насколько вы оценили её');
dataBaseProjects.quality[firstProjectQuality] = graderYourself;
dataBaseProjects.quality[LastProjectQuality] = LastgraderYourself;
console.log(dataBaseProjects);
