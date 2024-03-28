let number = Math.floor(Math.random() * 100);
const even = ":Это четное 00000число";
const odd = ":Это нечетное 00000число";
number1 = number1 % 2 === 0 ? [number1] + even : [number1] + odd;

console.log(number1);