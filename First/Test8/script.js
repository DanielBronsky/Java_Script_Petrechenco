// "use strict";

// let num = 20;

// function showFirstMassge(text) {
//   console.log(text);
//   console.log(num);
// }

// showFirstMassge("Hello world!");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 3));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//   console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//   return a + b;
// };

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

function sayHello(name) {
  return `Привет, ${name}!`;
}

function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1];
}

function getMathResult(numberBase, repeat) {
  if (typeof repeat !== "number" || repeat <= 0) {
    return numberBase;
  }

  let result = "";
  for (let i = 1; i <= repeat; i++) {
    if (i === repeat) {
      result += `${numberBase * i}`;
    } else {
      result += `${numberBase * i}---`;
    }
  }
  return result;
}

console.log(getMathResult(3, 10));
