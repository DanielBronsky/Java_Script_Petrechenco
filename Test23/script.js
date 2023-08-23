let x = 5;
alert(x++); // 5
////////
let z = 5;
alert(++z); // 6
/////
[] + false - null + true; // "NaN", [] + false = typeof - "string"
/////
let y = 1;
let j = (y = 2);
alert(j); // 2
//////
[] + 1 + 2; // "12"
/////
alert("1"[0]); // 1
/////
2 && 1 && null && 0 && undefined; // null "И" всегда запинается на лжи а "ИЛИ" запинается на правде
///////
!!(a && b) === (a && b); // false
//////
alert(null || (2 && 3) || 4); // 3
/////
a = [1, 2, 3];
b = [1, 2, 3];
a == b; //false
/////
alert(+"Infinity"); // Infinity (number)
///////
"Ёжик" > "яблоко"; // false
//////
0 || "" || 2 || undefined || true || false; // 2
