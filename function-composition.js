const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composeFunctions = (num) => addFive(double(square(num)));

console.log(composeFunctions(3));
