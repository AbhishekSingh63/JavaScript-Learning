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


// *******Memory*******

// Stack Memory(for primitive datatypes), Heap Memory(for non-primitive datatypes)

let myName="Abhi"
let anotherName=myName
anotherName="Rohan"
console.log(myName);
console.log(anotherName);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo=userOne
userTwo.email="abhi@google.com"
console.log(userOne.email);
console.log(userTwo.email);