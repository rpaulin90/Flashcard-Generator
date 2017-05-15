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
        type: "input",
        message: "enter 'make' to create a new card or 'read' to review an existing card",
        name: "action"
    }


]).then(function(card) {

    if (card.action === "make") {

        inquirer.prompt([

            {
                type: "list",
                message: "what type of card would you like to create?",
                choices: ["Basic Card","Cloze Card"],
                name: "cardType"
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
            var newBasicCard;

            if(makeCard.cardType === "Basic Card"){
                newBasicCard = constructors.BasicCard(makeCard.question,makeCard.answer);
                fs.appendFile("logQ.txt", newBasicCard.front);
                fs.appendFile("logA.txt", newBasicCard.back);
            }
            else if(makeCard.cardType === "Cloze Card"){
                newBasicCard = constructors.ClozeCard(makeCard.question,makeCard.answer);
                fs.appendFile("logQ.txt", newBasicCard.partial() + "\n");
                fs.appendFile("logA.txt", newBasicCard.back + "\n");
            }

        });

    }

    else if(card.action === "read"){

        fs.readFile("logQ.txt", "utf8", function (error, data) {

            if(error){
                console.log("hmmm there was an error. Your deck of cards must be empty, try making cards before you read them");
                return
            }

            var questions = data.split("\n");

            inquirer.prompt([

                // Here we give the user a list to choose from.
                {
                    type: "list",
                    message: "what question would you like to review?",
                    choices: questions,
                    name: "questionToReview"
                }

            ]).then(function (answer) {

                var index;
                for (var x = 0; x < questions.length; x++) {
                    if (answer.questionToReview === questions[x]) {
                        index = x;
                    }
                }
                fs.readFile("logA.txt", "utf8", function (error, data) {
                    var answers = data.split("\n");
                    console.log("The answer is: " + answers[index]);

                });
            });
        });
    }
});
