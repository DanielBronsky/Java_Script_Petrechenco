const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const wrapper = document.querySelector(".wrapper");
const hearts = wrapper.querySelectorAll(".heart");
const oneHeart = wrapper.querySelector(".heart");


// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("I was here");

div.classList.add("black");

// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1])

// hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0])

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "<h1>Hello world</h1>"

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
