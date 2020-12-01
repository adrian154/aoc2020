// To run: node solution.js
const numbers = String(require("fs").readFileSync("../data.txt")).split("\n").map(Number);

for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
        if(numbers[i] + numbers[j] == 2020) {
            console.log(numbers[i] * numbers[j]);
        }
    }
}