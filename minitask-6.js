const data = { id: 1, meta: { author: "Jane", tags: ["js", "es6"] } };

const {
  id,
  meta: { author },
  meta: {
    tags: [tagPertama],
  },
} = data;

console.log(`id: ${id} \nauthor: ${author} \ntag pertama: ${tagPertama}`);
