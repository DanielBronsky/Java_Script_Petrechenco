function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "It's not a number!";
  }
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(4 / 2));
