let name = "Samar Alma Khan";
let age = 23;

console.log("My name is " + name + " and I am " + age + " years old.");
//old way

console.log(`MY name is ${name} and I am ${age} years old.`);
// modern way (string interpolation);

const gameName = new String("SamarAK-101");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('A'));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 5)
//substring doesn't let you choose -neg value like slice...
//and if yoyu try to give one it will automatically take it as 0
console.log(newString);

const newerString = gameName.slice(-11, 5)
//-neg values start from end (right side)
console.log(newerString);

let spaceString = "     Izuku Midoriya   ";
let cleanString = spaceString.trim();
// trim() would remove the space that are before and after the strings but not from the middle
console.log(cleanString);
console.log(spaceString);

const url = "https://samar.com/samar%20alam%20khan";
console.log(url.replace('%20', '-'));
// .replace will only replace the first value in the string 
console.log(url.replaceAll('%20', '-'))
// .replaceAll will replace all the repeated values in the string
console.log(cleanString.split(' '));
// It can split a string according to the separator 

// THERE ARE MANY METHODS LIKE ABOVE WHICH YOU HAVE TO LEARN BY YOURSELVES THORGH DOCUMENTATIONS