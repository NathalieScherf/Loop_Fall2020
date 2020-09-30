// # Tip calculator

// Create a Tip calculator(or rather a function for a tip calculator)!

// For any number of guests sharing a restaurant bill, calculate how much tip each guest needs to pay.
// Use variables to store the number of guests, the amount of the bill and the tip in percentage, e.g.

let guests = 3;
let bill = 90;
let tipPercentage = 10;

// Create a function which takes these values as input and outputs the total amount each guest needs to pay as well as the amount of tip that is included, eg`Each guest needs to pay: 44 euro` and`The amount of tip for each guest is: 4 euro`.

const calcBillwithTip = (guests, bill, tipPercentage) => {

    // get amount per Guest: 
    let perGuest = bill / guests;

    // get Tip per Guest:
    let tipPerGuest = (bill * (tipPercentage/100)) /guests;
  
    // Sum amount and tip per geust: 
    let totalPerGuest = perGuest + tipPerGuest;

    console.log(`
    Each guest has to pay ${totalPerGuest} €.
    The amount of tip (included) is ${tipPerGuest} €.`);

    // return the total to use in next function!
    return totalPerGuest;
};

const totalForEachGuest = calcBillwithTip(guests,bill, tipPercentage);

// Assume that the bill is in Euro and that half of the guests are from the US.Caluclate how much each one is paying in US dollars.
// For this you can hard code a convertion rate.

// 1 euro is 1.18 us Dollar
let conversionrateEuro_US = 1.18; 

const converter = (value,conversionrate)  =>  value * conversionrate;

let amountInUsDollar = converter(totalForEachGuest, conversionrateEuro_US);
console.log(`In US Dollars this is ${amountInUsDollar} $`);