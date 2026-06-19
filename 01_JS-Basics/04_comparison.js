// always try to compare same datatypes, but JS allows comparison of diiferent data types automatically by using a process called type coercion

console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0); // the reason is that an equity check == and comparison > < <= >=, work differently. Comparisons convert null to a number, treating it as 0. That's why (null>=0) is true, (null>0) is false.

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// === -> it is strict check, it first checks the datatypes then the value
console.log("2"===2);