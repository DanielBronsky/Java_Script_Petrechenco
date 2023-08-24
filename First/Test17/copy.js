// let a = 5;
// b = a;
// b = b + 5;
// console.log(b);
// const obj = {
//   a: 5,
//   b: 1,
// };
// const copy = obj; //Ссылка
// copy.a = 10;
// console.log(obj);
// console.log(copy);
//** */
function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(numbers);
console.log(newNumbers);
newNumbers.c.x = 5;
console.log(newNumbers);
console.log(numbers);
