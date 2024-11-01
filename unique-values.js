const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueValues = (arr) => {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

console.log(uniqueValues(numbers));
