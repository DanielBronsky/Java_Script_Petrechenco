// To string

// 1
console.log(typeof String(null));
console.log(typeof String(4));

//2
console.log(typeof (null + ""));
console.log(typeof (5 + ""));

const num = 5;
console.log("https://999.md/ru/list/transport/cars?page=" + num);

const fontSize = 26 + "px";

// To Number

// 1
console.log(typeof Number("4"));

// 2
console.log(typeof +"-6");

// 3
console.log(typeof parseInt("15px", 10));
// let answer = +prompt("Hello", "");

// To Boolean

// 0, "", null, undefined, NaN - False

// 1
let switcher = null;

if (switcher) {
  console.log("Working....");
}

switcher = 1;

if (switcher) {
  console.log("Working....");
}

// 2

console.log(typeof Boolean("4"));

// 3

console.log(typeof !!"4");
