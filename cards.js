/**
 * Created by rpaulin on 5/15/17.
 */

/// This file is used to create new instances of BasicCard or ClozeCard

var constructors = require("./constructors");

module.exports = {

    firstPresident: constructors.BasicCard(
        "Who was the first president of the United States?", "George Washington"),

    firstPresidentCloze: constructors.ClozeCard(
        "George Washington was the first president of the United States.", "George Washington"),

    something: constructors.ClozeCard("hello world", "dude")


};
