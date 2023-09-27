"use strict";

// console.log("Запрос данных...");

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     console.log("Данные получены....выводим на экран:");
//     setTimeout(() => {
//       product.status = "order";
//       resolve(product);
//     }, 2000);
//   })
//     .then((data) => {
//       data.modify = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(() => {
//       console.log("Произошла ошибка");
//     })
//     .finally(() => {
//       console.log("Конец");
//     });
// });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000ms"));
// test(3000).then(() => console.log("3000ms"));

// Promise.all([test(1000), test(3000)]).then(() => {
//   console.log("All");
// });

Promise.race([test(1000), test(3000)]).then(() => {
  console.log("All");
});
