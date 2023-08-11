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

function firstTask() {
  for (i = 5; i <= 10; i++) {
    console.log(i);
  }
}

firstTask();

function secondTask() {
  for (i = 20; i > 10; i--) {
    if (i === 13) break;
    console.log(i);
  }
}

secondTask();

function thirdTask() {
  for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

thirdTask();

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  let i = 2;

  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

function fifthTask() {
  const arrayOfNumbers = [];
  for (i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
  }
  return arrayOfNumbers;
}

fifthTask();
