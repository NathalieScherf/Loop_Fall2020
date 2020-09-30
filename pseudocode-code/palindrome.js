

let palindrome = "Sir - Tetris";

const checker = input => {
    let word= sanitizer(input);
    let isPalindrome = false;

    for(let i = 0; i < word.length/2; i++){
        console.log(word[i], word[word.length - (i + 1)]);
       if(word[i] === word[word.length - (i + 1)]) {
           isPalindrome = true
       } else {
           isPalindrome = false
           break
       }
       console.log(isPalindrome);
    }
    return isPalindrome
}


const sanitizer = input => {
    return input.toLowerCase().trim().split(" ").join("").replace("-", "")
}

console.log('result', checker(palindrome));