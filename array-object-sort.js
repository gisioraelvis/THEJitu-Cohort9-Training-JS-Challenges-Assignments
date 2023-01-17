/**
 * Given an array of objects
 * e.g [{name: "Elvis", age: "23"}, {name: "Ojay", age: "24"}]
 * sort them in ascending order using age
 */

const array = [
  { name: "Elvis", age: "23" },
  { name: "Ojay", age: "24" },
  { name: "Owidi", age: "22" },
];

const sortedArray = array.sort((a, b) => a.age - b.age);

console.log(sortedArray);
