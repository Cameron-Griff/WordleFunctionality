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
let word_array = word.split('');
let guess_array = guess.split('');
//Print array
console.log(`Guess: ${guess_array}`); // Should print "Guess: PURSE"
console.log(`Word: ${word_array}`); // Delete this for implementation, just to test code! Should print "Word: PULSE"
//Identifying shared letters between guess and message
const shared = guess_array.some(cam => word_array.includes(cam))
const letters = guess_array.filter(cam => word_array.includes(cam))
console.log(`The guess and word share the following letters: ${letters}`)



for (index = 0; index < word_array.length; index++) { //Looking through all characters of message and seeing if character is in correct spot. If it is, place 1, if not place 0.
  if (guess_array[index] === word_array[index]) {
    review[index]='1'
  } else if (guess_array[index] != word_array[index]) {
    review[index]='0'
  }
}

console.log(review)

if (guess === word) {
  console.log(`Congrats! You guessed the correct word: ${guess}!`)
} else {
  console.log('Guess again!')
}
