// let score = "22";

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score); // it will chage the dataType to number
// console.log(valueInNumber); // NaN is 'not a number'

// /* will change into...
// "33"      => 33 (number)
// "33abc"   => NaN
// "abc"     => NaN
// null      => 0 (number)
// undefined => NaN
// false     => 0 (number)
// true      => 1 (number)
// */

// let loggedIn = null;
// let booleanloggedIn = Boolean(loggedIn);
// console.log(booleanloggedIn, loggedIn);

// /* will turn into...
// 1          => true
// 5 or -5    => true (anything but 0 will give true even -ve integers)
// 0          => false
// unddefined => flase
// false      => null
// */


// let someNumber = 234;
// let stringNumber = String(someNumber);
// console.log(typeof someNumber,typeof stringNumber)

// let value = 3
// let negValue = -value;
// console.log(value, negValue);

// console.log(2+2) //addition
// console.log(2-2) //subtraction
// console.log(2*3) //multiplication
// console.log(2**3) //raise to the power
// console.log(10/2) //division
// console.log(10%3) //remainder

// let str1 = "Hello";
// let str2 = " Samar";

// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) //added as string
// console.log(1 + "2") //added as string
// console.log("1" + 2 + 2) //added as string
// console.log(1 + 2 + "2") //first two added as numbers and then as string
// // this way is genrally used in exams to question but not in practical coding

// console.log("1" + (2 +2))
// // using () is a practical way

// console.log(+true) //will give 1
// console.log(+"")   // will gove 0
// // but both of these are very bad way of writing code

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2;
// // also a bad way

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter)

//console.log(2 > 1)

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0) // '>, >=, <, <=' changes null into 0 and then compares
console.log(null == 0) //it does not and works differently
console.log(null >= 0) // '>, >=, <, <=' changes null into 0 and then compares
// equality check '==' and '>, >=, <, <=' works differently.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// all are false;

console.log("2" == 2) //true
console.log("2" === 2) // false (=== also checks dataType)