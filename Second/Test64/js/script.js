const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.reduce((allFilms, currentFilm) => {
    if (allFilms === "") {
      return currentFilm.name;
    }
    return `${allFilms}, ${currentFilm.name}`;
  }, "");
}

function setFilmsIds(arr) {
  return arr.map((film, index) => {
    return Object.assign({}, film, { id: index });
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => film.id || film.id === 0);
}

// console.log(showGoodFilms(films));
// console.log(showListOfFilms(films));
// console.log(setFilmsIds(films));
// console.log(checkFilms(films));

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount >= 0)
    .reduce((sum, item) => sum + item.amount, 0);
};

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((sum, item) => sum + item.amount, 0)
    : getPositiveIncomeAmount(data);
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));
