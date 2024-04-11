const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let subArray = [];
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] % 2 === 0) {
            subArray.push(numbers[i][j]);
        }
    }
    filteredNumbers.push(subArray);
}

console.log(filteredNumbers);