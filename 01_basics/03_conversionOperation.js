let score = "22";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // it will chage the dataType to number
console.log(valueInNumber); // NaN is 'not a number'

/* will change into...
"33"      => 33 (number)
"33abc"   => NaN
"abc"     => NaN
null      => 0 (number)
undefined => NaN
false     => 0 (number)
true      => 1 (number)
*/

let loggedIn = null;
let booleanloggedIn = Boolean(loggedIn);
console.log(booleanloggedIn, loggedIn);

/* will turn into...
1          => true
5 or -5    => true (anything but 0 will give true even -ve integers)
0          => false
unddefined => flase
false      => null
*/


let someNumber = 234;
let stringNumber = String(someNumber);
console.log(typeof someNumber,typeof stringNumber)