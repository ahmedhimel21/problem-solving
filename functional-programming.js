const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 5 },
];

const totalValue = (arr) =>
  arr.reduce((total, item) => total + item.quantity * item.price, 0);

console.log(totalValue(items));
