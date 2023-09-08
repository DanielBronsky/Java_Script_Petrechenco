"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener("click", () => {
  // box.style.height = box.scrollHeight + "px";
  // console.log(box.scrollTop);
  box.scrollTop = 0;
  // box.scrollTo(0, 800);
  // box.scrollBy(0, 800);
});

// box.style.height = "350px"
// btn.addEventListener("click", () => {
//   box.style.height = box.style.height === "350px" ? box.scrollHeight + "px" : "350px";
// });

// console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
// console.log(style);
