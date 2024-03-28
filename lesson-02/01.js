
let number1 = Math.floor(Math.random() * 100);
const even = ":Это четное число";
const odd = ":Это нечетное число";
number1 = number1 % 2 === 0 ? [number1] + even : [number1] + odd;

console.log(number1);

