const arrs = [
  1,
  2,
  3,
  "aku",
  "dan",
  "kamu",
  false,
  false,
  { name: "A" },
  { age: 10 },
  ["hiking", "robbing"],
  [2, 3, 50],
];

let numb = 0; //3
let str = 0; //3
let bool = 0; //2
let obj = 0; //2
let arr = 0; //2

for (let i = 0; i < arrs.length; i++) {
  if (typeof arrs[i] === "number") {
    numb += 1;
  } else if (typeof arrs[i] === "string") {
    str += 1;
  } else if (typeof arrs[i] === "boolean") {
    bool += 1;
  } else if (typeof arrs[i] === "object" && !Array.isArray(arrs[i])) {
    obj += 1;
  } else if (Array.isArray(arrs[i])) {
    arr += 1;
  }
}

console.log(
  "Number: " + numb,
  "\nString: " + str,
  "\nBoolean: " + bool,
  "\nObject: " + obj,
  "\nArray: " + arr,
);
