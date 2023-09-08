// const someRes = getData();
// const node = document.querySelector(".class");

// setInterval(function () {
//   if (node) {
//     node.innerHTML = someRes;
//   }
// }, 1000);

// function outer() {
//   const potentionallyHugeArray =[]
//   return function inner () {
//     potentionallyHugeArray.push("Hello")
//     console.log('Hello!!!!!');
//   }
// }

// const sayHello = outer()

const btn = document.querySelector(".btn");

function createElement() {
  const div = document.createElement("div");
  div.id = "test";
  return document.body.append(div);
}

function deleteElement() {
  document.body.removeChild(document.getElementById("test"));
}

btn.addEventListener("click", () => {
  if (document.getElementById("test")) {
    deleteElement();
  } else {
    createElement();
  }
});
