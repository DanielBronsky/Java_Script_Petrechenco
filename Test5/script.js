const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayEvenNumbers = [];
const oddEvenNumbers = [];

function evenNumbers() {
  for (let i = 1; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayEvenNumbers.push(array[i]);
    } else {
      oddEvenNumbers.push(array[i]);
    }
  }
}

evenNumbers();
console.log(arrayEvenNumbers);
console.log(oddEvenNumbers);

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}
