// "use strict";

// const inputRub = document.querySelector("#rub");
// const inputUsd = document.querySelector("#usd");

// inputRub.addEventListener("input", () => {
//   const request = new XMLHttpRequest();

//   // request.open(method, url, async, login, password);
//   request.open("GET", "js/current.json");
//   request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   request.send();

//   request.addEventListener("readystatechange", () => {
//     if (request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = "Don't work. Sorry...";
//     }
//   });
// });

function transformString(inputString) {
  return inputString
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const originalString = 'test "><img src=x onerror=alert()>';
const transformedString = transformString(originalString);
console.log(transformedString);
