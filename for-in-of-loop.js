// for in vs for of loops

let obj = { a: 1, b: 2, c: 3 };
let arr = [1, 2, 3, 4, 5];

// For in with object returns the keys of the object's properties
for (let prop in obj) {
  console.log(prop); // 'a', 'b', 'c'
}

// For in with array return the indices of the array
for (let index in arr) {
  console.log(index); // '0', '1', '2', '3', '4'
}

// For of does not work with objects
// for (let value of obj) {
//   console.log(value); // TypeError: obj is not iterable
// }

// For of with array returns the values of the array
for (let value of arr) {
  console.log(value); // '1', '2', '3', '4', '5'
}
