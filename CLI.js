/**
 * Created by rpaulin on 5/15/17.
 */

/// This file is used exclusively for the interaction between user and command line

/// Using the constructors defined in the constructors.js file, we log information in text files accordingly

// Load the NPM Package inquirer
var inquirer = require("inquirer");
var fs = require("fs");
var constructors = require("./constructors");

inquirer.prompt([

    {
        type: "list",
        message: "Select 'make' to create a new card or 'read' to review an existing card",
        choices: ["Make","Read"],
        name: "action"
    }


]).then(function(card) {

    if (card.action === "Make") {

        inquirer.prompt([

            {
                type: "list",
                message: "what type of card would you like to create?",
                choices: ["Basic Card","Cloze Card"],
                name: "cardType"
            },

            {
                type: "input",
                message: "Enter a name for this card (one word)",
                name: "cardName"
            },

            {
                type: "input",
                message: "Enter your question or full text",
                name: "question"
            },

            {
                type: "input",
                message: "Enter your answer or word to omit",
                name: "answer"
            }

        ]).then(function(makeCard){
            var newCard;
            var newCardStringified;

            if(makeCard.cardType === "Basic Card"){
                newCard = constructors.BasicCard(makeCard.question,makeCard.answer);
                //newCardStringified = JSON.stringify(newCard);
                fs.readFile("logJSON.txt", "utf8", function (error, data) {
                    var objectArray = JSON.parse(data);
                    objectArray.cards.push(newCard);
                    //objectArray.cards.push(newCard);
                    var objectArrayString = JSON.stringify(objectArray);
                    fs.writeFile("logJSON.txt", objectArrayString, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    });
                });
                // fs.appendFile("logJSON.txt","{" + '"' + makeCard.cardName + '"' + ":" + newCardStringified + "}" + "\n");
                fs.appendFile("logCardName.txt", makeCard.cardName + "\n");
            }
            else if(makeCard.cardType === "Cloze Card"){
                newCard = constructors.ClozeCard(makeCard.question,makeCard.answer);
                if(newCard.error){
                    console.log(newCard.partial());
                    return
                }
                else {
                    newCard.clozedText = newCard.partial();
                    fs.readFile("logJSON.txt", "utf8", function (error, data) {
                        var objectArray = JSON.parse(data);
                        objectArray.cards.push(newCard);
                        //objectArray.cards.push(newCard);
                        var objectArrayString = JSON.stringify(objectArray);
                        fs.writeFile("logJSON.txt", objectArrayString, function(err) {
                            if(err) {
                                return console.log(err);
                            }
                        });
                    });
                    // fs.appendFile("logJSON.txt","{" + '"' + makeCard.cardName + '"' + ":" + newCardStringified + "}" + "\n");
                    fs.appendFile("logCardName.txt", makeCard.cardName + "\n");
                }
            }

        });

    }

    else if(card.action === "Read"){

        fs.readFile("logCardName.txt", "utf8", function (error, data) {

            if(error){
                console.log("hmmm there was an error. Your deck of cards must be empty, try making cards before you read them");
                return
            }

            //var questions = data.split("\n");
            var cards = data.split("\n");

            inquirer.prompt([

                // Here we give the user a list to choose from.
                {
                    type: "list",
                    message: "what card would you like to review?",
                    choices: cards,
                    name: "cardToReview"
                }

            ]).then(function (answer) {
                var myJSON;
                var index;
                for(var x = 0; x < cards.length; x++){
                    if (answer.cardToReview === cards[x]){
                        index = x;
                    }
                }

                fs.readFile("logJSON.txt", "utf8", function (error, data) {
                    var cardChosen = answer.cardToReview;
                    myJSON = JSON.parse(data);
                    //console.log(myJSON[cardChosen].front);
                    if(myJSON.cards[index].clozedText !== undefined) {
                        console.log(myJSON.cards[index].clozedText);
                    }else{
                        console.log(myJSON.cards[index].front);
                    }

                    inquirer.prompt([

                        // Here we give the user a list to choose from.
                        {
                            type: "input",
                            message: "Enter your answer...",
                            name: "userAnswer"
                        }

                    ]).then(function (user_answer) {
                        if(myJSON.cards[index].clozedText !== undefined) {
                            if (user_answer.userAnswer === myJSON.cards[index].back) {
                                console.log("you got it!" + "\n" + "question: " + myJSON.cards[index].clozedText + "\n" + "answer: " + myJSON.cards[index].back)
                            }
                            else{
                                console.log("hmm that's incorrect..." + "\n" + "question: " + myJSON.cards[index].clozedText + "\n" + "answer: " + myJSON.cards[index].back)
                            }
                        }
                        else{
                            if (user_answer.userAnswer === myJSON.cards[index].back) {
                                console.log("you got it!" + "\n" + "question: " + myJSON.cards[index].front + "\n" + "answer: " + myJSON.cards[index].back)
                            }
                            else{
                                console.log("hmm that's incorrect..." + "\n" + "question: " + myJSON.cards[index].front + "\n" + "answer: " + myJSON.cards[index].back)
                            }
                        }
                    });
                });


            });
        });
    }
});

