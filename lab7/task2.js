const numbers = [12, 5, 34, 7, 89, 2, 45];

let max = numbers[0];
let min = numbers[0];

for (let num of numbers) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log("Maximum Number:", max);
console.log("Minimum Number:", min);
