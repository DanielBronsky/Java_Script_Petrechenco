// Место для первой задачи
function calculateVolumeAndArea(value) {
  return typeof value !== "number" || value < 0 || !Number.isInteger(value)
    ? "При вычислении произошла ошибка"
    : `Объем куба: ${value * value * value}, площадь всей поверхности: ${
        value * value * 6
      }`;
}

// Место для второй задачи
function getCoupeNumber(number) {
  if (typeof number !== "number" || !Number.isInteger(number) || number < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (number === 0 || number > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(number / 4);
  }
}

// Место для первой задачи
function getTimeFromMinutes(value) {
  if (typeof value !== "number" || value < 0 || !Number.isInteger(value)) {
    return "Ошибка, проверьте данные";
  }
  let hours = Math.floor(value / 60);
  let minutes = value % 60;
  if (hours === 2 || hours === 3 || hours === 4) {
    return `Это ${hours} часа и ${minutes} минут`;
  } else if (hours === 1) {
    return `Это ${hours} час и ${minutes} минут`;
  } else {
    return `Это ${hours} часов и ${minutes} минут`;
  }
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  return typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    typeof d === "number"
    ? Math.max(a, b, c, d)
    : 0;
}

function fib(n) {
  if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    return "";
  } else if (n === 1) {
    return "0";
  } else {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result.join(" ");
  }
}

console.log(fib(7));
