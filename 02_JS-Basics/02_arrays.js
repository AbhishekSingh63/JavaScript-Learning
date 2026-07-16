const marvelH=["thor","ironman","spiderman"]
const dcH=["superman","flash","batman"]

// marvelH.push(dcH)

// console.log(marvelH); // it will give array inside array
// console.log(marvelH[3][1]);

// const heroes=marvelH.concat(dcH) // gives a new array
// console.log(heroes);

// const allHeroes=[...marvelH, ...dcH] // spread operator: spread open both the arrays and then merge them together
// console.log(allHeroes);

// const anotherArr=[1,2,3,[4,5,6],7,[8,9,[10,11]]] // to make this array usable, we can use flat()- to fix the structure
// const realAnotherArray=anotherArr.flat(Infinity)
// console.log(realAnotherArray);

// converting string to array
console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name: "Abhishek"})); // interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); // combines different variables in one array