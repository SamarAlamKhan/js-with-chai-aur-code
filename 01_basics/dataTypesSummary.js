// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "Samar Alam Khan";
let age = 23;
const boy = true;
let child = null;
let wife;

let id = Symbol('123');
let anotherId = Symbol('123');
// id != anotherId even though thier value is same but hey became unique because of Symbol

const bigNumber = 8723456987n;

console.log(
    "name:", typeof name,  
    "age:", typeof age,  
    "boy:", typeof boy,  
    "child:", typeof child,  
    "wife:", typeof wife,  
    "id:", typeof id,
)
//output
//name: string age: number boy: boolean child: object wife: undefined id: symbol


// Refrence (Non-Primitive)

//Arrays, Objects, Functions

const heroes = ["Batman", "Spiderman", "Ironman", "Thor", "Captain America", "Superman"];

let student = {
    name: "Samar",
    age: 23,
    stuentId: 20140163908
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(
    "heroes:", typeof heroes, 
    "student:", typeof student,
    "function:", typeof myFunction
);

//output
//heroes: object student: object function: function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory (Primitive), Heap (Non-Primitive)

let myFriend = "Sanket Rajput";
let bestFriend = myFriend;
bestFriend = "Mahesh Tikadar";

console.log(myFriend)
console.log(bestFriend);

let userOne = {
    email: "user@google.com",
    upi: "user@Gpay"
}

let userTwo = userOne;

userTwo.email = "Samar@google.com";

console.log(userOne.email);
console.log(userTwo.email)