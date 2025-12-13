// DATES

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// // 025-12-13T14:46:07.322Z

// console.log(myDate.toString()); // Sat Dec 13 2025 14:46:07 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleString()); // 12/13/2025, 3:00:16 PM

// console.log(myDate.toLocaleDateString()); // 12/13/2025

// console.log(myDate.toLocaleTimeString()); // 3:00:16 PM

// console.log(myDate.toDateString()); // Sat Dec 13 2025

// console.log(myDate.toUTCString()); // Sat, 13 Dec 2025 15:00:16 GMT

// console.log(myDate.toISOString()); // 2025-12-13T14:46:07.322Z
// console.log(myDate.toJSON()); // 2025-12-13T14:46:07.322Z
// console.log(myDate.toTimeString()); // 15:00:16 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.getTimezoneOffset()); // 0

let myCreatedDate = new Date(2023, 0, 3) // when giving D, M, Y separately, months start from 0 (Jan = 0)
// We can also insert date like...
let myCreatedDateAndTime = new Date(2025, 0, 3, 5, 30,) // (YYYY, MM, DD, HH, Min,)
console.log(myCreatedDateAndTime.toLocaleString());

let myCreatedDate2 = new Date("2025-01-13") // when giving YYYY-MM-DD in format, months start from 1 (Jan = 1)
console.log(myCreatedDate2.toLocaleString());

// We can also change format and write it as...
let myCreatedDateInd = new Date("12-13-2025"); // ("MM-DD-YYYY")

console.log(myCreatedDate);
console.log(myCreatedDateInd.toDateString());