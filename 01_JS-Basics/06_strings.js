const name="Abhishek"
const repocount=20

console.log(name+repocount+" Value"); // old syntax to concatenate strings

console.log(`Hello my name is ${name}, and my repo count is ${repocount}`) // modern way to print and concatenate string

const gamename=new String('abhishek-singh') // Creates a String object containing "abhi"
console.log(gamename[0]);
console.log(gamename.__proto__); // Displays the prototype object (All String methods and properties)

// String Methods
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('b'));

const newStr=gamename.substring(0,5)
console.log(newStr);

const anotherStr=gamename.slice(-14,6);
console.log(anotherStr);

const newStrOne="   abhi   "
console.log(newStrOne);
console.log(newStrOne.trim()); // removes whitespaces from string

const url="https://abhi.com/abhi%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('sahil'));

console.log(gamename.split('-')); // to split string based on a character