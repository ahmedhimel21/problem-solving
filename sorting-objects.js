const cars = [
  { make: "Toyota", model: "Camry", year: 2010 },
  { make: "Honda", model: "Accord", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
];

const sortCarsByYear = (carsArr) => carsArr.sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));
