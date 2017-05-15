/**
 * Created by rpaulin on 5/15/17.
 */

/// This file is used exclusively to determine what is going to be logged in the console

var cards = require("./cards");

console.log(cards.firstPresident.front);

console.log(cards.firstPresident.back);
// "George Washington"
console.log(cards.firstPresidentCloze.back);

// " ... was the first president of the United States.
console.log(cards.firstPresidentCloze.partial());

// "George Washington was the first president of the United States.
console.log(cards.firstPresidentCloze.front);

console.log(cards.something.partial());