const arr=[0,1,2,3,4,5]

// in javascript, arrays are resisable
// we can multiple datatypes in a single JS array
console.log(arr[2]);

// in JS, 'array copy operators' create shallow copy

const arr2= new Array(1,2,3,4) // 2nd way to declare array

// Array Methods

arr.push(6)
arr.pop()
console.log(arr);

arr.unshift(5) // adds a new element at start by shifting all elements
console.log(arr);

arr.shift() // shift from right to left, removing 1st element
console.log(arr);

console.log(arr.includes(9));

console.log(arr.indexOf(9));

const newArr = arr.join()
console.log(newArr);
console.log(typeof newArr);

// slice- it is exclusive and no change on original array, splice- it is inclusive and removes the part from the original array
console.log("A ", arr);

const myn1=arr.slice(1,3)

console.log(myn1);
console.log("B ", arr);

const myn2=arr.splice(1,3);

console.log(myn2);
console.log("C ", arr);