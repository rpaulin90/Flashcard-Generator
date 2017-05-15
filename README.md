# Flashcard-Generator

This is a command line application that generates virtual flashcards that the user can then go back and review.

There are two types of flashcards that can be created: **Basic Cards** and **Cloze Cards**

---

##Basic Cards

These flashcards are made up of a regular question and an answer.

Example:

**Question:** Who was the first president of the United States?

**Answer:** George Washington

##Cloze Cards

These cards are made of an incomplete statement and the word(s) that complete it

Example:

**Statement:** ... was the first president of the United States

**Answer/completion word(s):** George Washington

---

#Running the program

In the command line, enter the following:

``node CLI.js``

The program will then take the user through a series of prompts where he/she can either read an existing flashcard or write a new flashcard.

If you try to read a flashcard when there are no flashcards created, you will receive an error message.

##Writing a new flashcard

If the user selects "write" when prompted to select between "read" or "write" a flashcard, the user will then be asked what type of flashcard he/she wishes to create: _Basic Card_ or _Cloze Card_.

Then, the program will keep prompting the user to write the question/statement and the answer/completion word

If the user selects *Cloze Card* and tries to enter an _answer/completion word_ that is not included in the original full text, the program will throw an error and terminate.

##Reading a flashcard

If the user selects "read" when prompted to choose between "read and "write", The user will be shown the list of all questions and unterminated statements (basic cards and cloze cards respectively).

When the user selects an option, the program will output the answer.

