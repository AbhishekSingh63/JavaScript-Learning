// Primitive -> Value(call by value)
// 7 types -> string, number, boolean, null, undefined, symbol, bigInt

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);

// Non Primitive -> Reference(call by reference)
// types -> array, objects, funtions

const heroes=["superman","spiderman","hulk"];

let myObj={
    name: "abhishek",
    age: 21
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heroes);