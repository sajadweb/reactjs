//let helloWorld: string
let helloWorld = "Hxzsxcasdca";
helloWorld = 2;
let t = 7;
t=8;
t=3.4;
// var a:number = 23.34;
// console.log(a); //25.34
// a = "23.23";
// console.log(a + 2); //23.232

//type
var a:number = 23.34;
console.log(typeof a === "number")

//Defining Types
const user = {
  name: "Hayes",
  id: 0,
};

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)


type StringArray1 = Array<string>;
type NumberArray1 = Array<number>;
type ObjectWithNameArray1 = Array<{ name: string }>;
type multiType = Array<{ name: string } | number | string>;
const food: StringArray1 = ["apple", "ccccc", "berger"];
const num1: NumberArray1 = [1, 2.3, 4.6];
const pr: ObjectWithNameArray1 = [{ name: "omid" }, { name: "ali" }];
const multi: multiType = [
  "apple",
  1,
  { name: "omid" },
  "berger",
  4.6,
  { name: "ali" },
];


let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error


function sayHi(): void { 
    console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined


let nothing: void = undefined;
let num: void = 1; // Error



// Difference between never and void?????

let something: void = null;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'