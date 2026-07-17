const todos = ["Makan", "Minum", "Mandi", "Olahraga"];
const input = "Minum";

const customFilter = (arrs) => {
  let result = [];

  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] !== input) {
      result[result.length] = arrs[i];
    }
  }

  return result;
};

// Method filter tidak bersifat mutasi
// Method filter mereturn array baru sesuai dengan kondisi yang ditentukan
// Input berupa array lama dan output berupa array baru setelah di filter

const filteredTodos = todos.filter((todo) => todo !== input);
const testCustomFilter = customFilter(todos);

console.log(filteredTodos);
console.log(testCustomFilter);
console.log(todos);
