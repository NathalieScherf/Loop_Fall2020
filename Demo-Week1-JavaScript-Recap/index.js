// to see the output of the code, i.e. anything in the console.log(), open a terminal and write `node index.js` (or the name of your file).

console.log("it works!");

// declare some variables: 
// ES6 (newer JavaScript)
// block scope 
// varibales declared with let can be filled with new values: 
let var1 = "Hello";
var1 = "other input";
//varibales declared with let can be  undefined, but can get a value later:

let var4;
var4 = "now with value";

console.log("variable 1 with let ", var1);
console.log("variable 4 with let ", var4);

// Constant (cannot change value, must be declared with a value)
const var2 = "Hi!";

// Before ES6 (older JavaScript)
// global scope 
var var3 = "hey";

// what is a block? Anything between {} is in a block. 

const myfunction = () => {
  // variables declared with let are only visible inside of the block in which they are declared: in this example the block is the following: 
    if( 1 < 2){
        let inBlock = "block scope";
        console.log(" let is visible in the Block", inBlock);
        // the variable declared with var are also visible outside of the block:
        var varInBlock = "global scope";
    }
    // this console log will throw an error:
    //console.log("variables declared with let is not visible outside of the Block", inBlock);
    // variables declared with var are visible here:
    console.log(varInBlock);
};
// call the function
myfunction();


// for-loops: repetition
for(let i = 1; i < 10; i++) {
    console.log("in the loop: ", i);
}

// Boolean values true, false
let condition1 = 10;
let condition2 = 20;
// if (condition) { do something}
if (condition1 > 2 && condition2 > 15) {
    console.log("condition 1 is:", condition1);
}


// Difference between  comparisons with == (content is the same) === (type is the same)
// a is of the Datatype String
let a = "20";
// b is of a Datatype Number
let b = 20;

if (a == b) {
    console.log("a and b have the same value");
} 
// change the data type of a above to a Number, in odert to see the following console.log
if (a === b) {
    console.log("a and b are of the same type and have the same value");
}
