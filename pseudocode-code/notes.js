// Math.random() 

// Math.floor()
// Math.ceil()

// Math.round() 
// 0.0-0.49 = 0
// 0.5 - 1.49 = 1
// 1.5 - 2 = 2

// parseInt()


const randomNr = array => {
    let nr = Math.random();
    nr = nr * array.length;
    nr = Math.floor(nr)
    return array[nr]
}

// Roll Dice:
let dice = [1,2,3,4,5,6];
const playDice = array => {
    return randomNr(array)
}

let result = playDice(dice);
console.log("Dice", result);


// rock paper scissors:
let rockPaperScissors = [ "rock", "paper", "scissors"]

const rps = array => {
    return randomNr(array)
}

let result2 = rps(rockPaperScissors);
console.log("RPS", result2);

// Let 2 players play:
let player1 = "scissors" //rps(rockPaperScissors)
let player2 = "rock" // rps(rockPaperScissors)
console.log("Game", player1, player2);
// and check their results:

// If same 
//     draw
// if p1 = rock && p2 = paper
//     p2 wins
//     else 
//         p1 wins
// if p1 = scissor && p2 = paper
//     p1 wins
//     else 
//         p2 wins
// if  p1 paper && p2 = rock
//     p1 wins
//     else 
//         p2 wins
    
 if(player1 === player2) {
    console.log("it's a draw!");
} else if ( player1 === "rock" && player2 === "paper") {
    console.log("player 2 wins", player2);
} else if (player1 === "scissors" && player2 === "paper") {
    console.log("player 1 wins");
} else if (player1 === "paper" && player2 === "rock") {
    console.log("player 1 wins");
} 












