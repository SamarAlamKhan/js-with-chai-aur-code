const score = 400;
console.log(score);

const balance = new Number(120);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.87978;
console.log(otherNumber.toPrecision(3));
// .toPrecision() it gives the precision upto the no of place provided...
// like above 3 is given 'toPrecision(3)' so the number would become precise to first 3 digits
// so, 23.87978 would be shown upto 3 digits 23.x and next to 3rd digit is 7, 3rd digit would become 9...
// like rounding of... 
// if the given number is less than the digits before decimal it would show that in exponantial
console.log(otherNumber.toPrecision(1));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //this will by default insert ',' accordnig to US standards
console.log(hundreds.toLocaleString('en-IN')); //this will insert ',' accordnig to Indian standards

// ++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
// it turns all values in positive value 4 --> 4 and -4 --> 4
console.log(Math.round(4.6)); // round of the number
console.log(Math.ceil(4.2));  // round of the number to the upper value
console.log(Math.floor(4.7)); // round of the number to the lower value
console.log(Math.min(4, 2, 3, 7, 9, 0)); // for finding the minimum value from array
console.log(Math.max(4, 2, 3, 7, 9, 0)); // for finding the maximum value from array

let diceRoll = Math.random();         //Math.random will pick a random no. b/w 0 & 1.
diceRoll = Math.ceil(diceRoll * 6);   //It will make no. lie from 1 to 6.
console.log(diceRoll);


// THIS IS A FORMULA WHEN YOU ALSO WANT MIN LIMIT TO YOUR OUTCOME LIKE B/W 100 & 200.

let min = 100;
let max = 200;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Lets understand what's happening here...
// First Math.random genrates a random no. b/w 0 and 1. Let's go further taking two examples, 0.01 & 0.93
// Then the number is multiplied by (max - min +1) => (101), which gives us...
// 0.01 * 101 = 1.01 & 0.93 * 101 = 93.93 then Math.floor will give us => 1 & 93
// and then we finally add the minmum no. of our range (100) which gives us => 1 + 100 = 101 & 93 + 100 = 193
// This will always make our output lie b/w 100 and 200.