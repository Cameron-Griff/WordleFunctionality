//Legend
console.log('1 = Correct Letter and Right Spot, 0 = Wrong Spot')
//Setting up Word and Guess
let upperword = 'Pulse'
let word = upperword.toUpperCase()
var upperguess = 'Purse'
let guess = upperguess.toUpperCase()
//Setting up empty array to print correct/semi/wrong spots
let review = []

//Spliting characters into seperate array spots
let arr = word.split('');
let bruh = guess.split('');
//Print array
console.log(`Guess: ${bruh}`); // Should print "Guess: PURSE"
console.log(`Word: ${arr}`); // Delete this for implementation, just to test code! Should print "Word: PULSE"
//Identifying shared letters between guess and message
const shared = bruh.some(cam => arr.includes(cam))
const letters = bruh.filter(cam => arr.includes(cam))
console.log(`The guess and word share the following letters: ${letters}`)



for (index = 0; index < arr.length; index++) { //Looking through all characters of message and seeing if character is in correct spot. If it is, place 1, if not place 0.
  if (bruh[index] === arr[index]) {
    review[index]='1'
  } else if (bruh[index] != arr[index]) {
    review[index]='0'
  }
}

console.log(review)

if (guess === word) {
  console.log(`Congrats! You guessed the correct word: ${guess}!`)
} else {
  console.log('Guess again!')
}
