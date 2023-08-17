const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },

  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;
    languages.forEach((element) => {
      str += `${element.toUpperCase()} `;
    });
    return str;
  },
};

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;

  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "";

  arr.length === 0 ? (str = "Семья пуста") : (str = "Семья состоит из: ");

  arr.forEach((member) => {
    str += `${member} `;
  });

  return str;
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

console.log(showFamily(family));
console.log(standardizeStrings(favoriteCities));

const someString = "This is some strange string";

function reverse(str) {
  return typeof str !== "string" ? "Ошибка!" : str.split("").reverse().join("");
}

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach(element => {
    if (element !== missingCurr) {
      str += `${element}\n`;
    }
  });
  return str;
}

console.log(reverse(someString));
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));
