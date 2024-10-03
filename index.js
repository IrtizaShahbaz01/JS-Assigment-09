let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let n = numbers.length + 1;
let totalSum = (n * (n + 1)) / 2;
let currentSum = 0;

for (let i = 0; i < numbers.length; i++) {
  currentSum += numbers[i];
}

let missingNumber = totalSum - currentSum;
console.log(numbers);
console.log("Missing number: " + missingNumber);
