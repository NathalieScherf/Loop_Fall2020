

const play = myArray => {
    let number = Math.random() * myArray.length;
    number = Math.round(number);
    return myArray[number]
} 

let rps = ['rock', 'paper', 'scissors']

let resultRPS = play(rps)
console.log(resultRPS);

let dice = [1,2,3,4,5,6]

let resultDice = play(dice)
console.log(resultDice);