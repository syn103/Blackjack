let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false


if (sum < 21) {
  console.log ("Do you want to draw a new card?🙂")
} else if (sum === 21) {
  console.log ("You got blackjack!🥳")
  hasBlackJack = true
} else {
  console.log("you're out!"😭)
}

console.log(hasBlackJack)