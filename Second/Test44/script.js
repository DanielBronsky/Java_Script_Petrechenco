function amountOfPages(summary) {
  let result = "";
  let x = 0;
  for (let i = 1; i <= summary; i++) {
    result += i;
    console.log(result);
    if (result.length === summary) {
      x = i;
      break;
    }
  }
  return x;
}

console.log(amountOfPages(25));

function isPangram(string) {
   string = string.toLowerCase()
   const letters = "abcdefghijklmnopqrstuvwxyz".split("")
   return letters.every((x) => string.includes(x))
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello world"));

function deepCount(a) {
  let count = 0;
  a.forEach((el) => {
    count ++;
    if (Array.isArray(el)) {
      count += deepCount(el);
    }
  });
  return count;
}

console.log(deepCount(["1", 5, "3", ["10"]]));
