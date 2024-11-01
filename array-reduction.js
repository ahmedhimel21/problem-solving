const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvenNumbers = (arr) =>
  arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumOfEvenNumbers(numbers));
