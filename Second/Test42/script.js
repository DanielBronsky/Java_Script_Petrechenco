const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const arr1 = ["Alex", "Alex", "Ann", "Nikols", "Ann"];

const set = new Set(arr);
const set1 = new Set(arr1);

// console.log(set);
// console.log(set1);

set1.add("Ivan");
set1.add("Nikols");

// console.log(set1);

// set.delete(value)
// set.has(value)
// set.clear()
// set.sixe

// for (let value of set1) console.log(value);

// set1.forEach((value, valueAgaining, set1) => {
//   console.log(value, valueAgaining);
// });

// console.log(set1.values());
// console.log(set1.keys());
// console.log(set1.entries());

function unique (arr) {
  return Array.from(new Set(arr))
}

console.log(unique(arr1));