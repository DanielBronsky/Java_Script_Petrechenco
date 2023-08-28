"use strict";

const birthday = Symbol("birthday");

const user = {
  name: "Alex",
  surname: "Smith",
  [birthday]: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

// user.showMyPublicData();

// Object.defineProperty(user, "birthday", {
//   value: prompt("Date ?"),
//   enumerable: true,
//   configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(user, "birthday"));

// Object.defineProperty(user, "birthday", { writable: false });
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "name", { writable: false });
// user.name = "Anton";
// Object.defineProperty(user, "gender", { value: "male" });
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperty(user, "showMyPublicData", { enumerable: false });

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
  name: { writable: false },
  surname: { writable: false },
});

//writable - можно изменять значение если "true" (Стоит по дефолту)
//enumerable - свойство будет перечислятся в циклах если "true" (Стоит по дефолту)
//configurable - свойство можно будет удалить а атрибуты можно изменить если "true" (Стоит по дефолту)
