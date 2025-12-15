// Array

const myArray = [1, 2, 3, 4, 5];
const myHeroes = ["Ironman", "Thor", "Captain America", "Hulk", "Spiderman", "Wolverine"];
const myArray2 = new Array("a", "b", "c", "d", "e");

// console.log(myArray);
// console.log(myArray2[3]);
// console.log(typeof myArray);


// // Array Methods

// myArray.push(6);  // push adds the new element in the end of the array
// myArray.push(7);
// console.log(myArray);
// myArray.pop();    // pop delete the last element of the array

// myArray.unshift(10, 12);  // unshift adds the new element in the starting of the array at [0] index
// myArray.shift();          // shift deletes the element at [0] index 

// // As shift & unshift manipulate the first element of the array, the index value of every element get disturbed
// // So, generally we should avoid these methods but still they can be used in certain cases

// console.log(myArray);

// console.log(myArray.includes(9)); 
// console.log(myArray.includes(3));
// // returns a boolean value true if present, false if not

// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(3));
// // returns the index of the given element if element is not present in the array then,...
// // it retuns -1

// const newArray = myHeroes.join();
// // .join() joins the elements of an array and converts it into a string(dataType).


// console.log(newArray, myHeroes);
// console.log(typeof newArray);
// console.log(typeof myHeroes);

console.log("A ", myHeroes);

const myn1 = myHeroes.slice(1, 3);

console.log(myn1);
console.log("B", myHeroes);

const myn2 = myHeroes.splice(1, 3);

console.log(myn2);
console.log("C", myHeroes);