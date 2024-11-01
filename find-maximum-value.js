const numbers = [5, 1, 9, 3, 7];

const findMaxValue = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMaxValue(numbers));
