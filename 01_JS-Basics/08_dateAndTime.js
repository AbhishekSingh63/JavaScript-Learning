// dates
let myDate=new Date()
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2023, 0, 23)
let myCreatedDate=new Date("01-23-2023")
// console.log(myCreatedDate.toDateString());

let myTimeStamp= Date.now() // it gives milli second value from 1st jan 1970 till present
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // it gives milli second value from 1st jan 1970 till the mentioned date

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    month: 'long'
}))