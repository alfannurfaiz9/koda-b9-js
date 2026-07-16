function processArray(arr, processor) {
  const result = [];

  if (typeof processor !== "function") {
    console.log("Parameter kedua harus function");
    return;
  }

  if (!Array.isArray(arr)) {
    console.log("Parameter pertama harus array");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = processor(arr[i]);
  }

  return result;
}

const showNumber = (num) => `Number: ${num}`;
const makeDollar = (num) => `$${num}`;
const addFive = (num) => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, showNumber));
console.log(processArray(numbers, makeDollar));
console.log(processArray(numbers, addFive));
