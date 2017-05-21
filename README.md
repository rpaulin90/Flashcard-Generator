# Flashcard-Generator

This is a command line application that generates virtual flashcards that the user can then go back and review.

There are two types of flashcards that can be created: **Basic Cards** and **Cloze Cards**

---

## Basic Cards

These flashcards are made up of a regular question and an answer.

Example:

**Question:** Who was the first president of the United States?

**Answer:** George Washington

## Cloze Cards

These cards are made of an incomplete statement and the word(s) that complete it

Example:

**Statement:** ... was the first president of the United States

**Answer/completion word(s):** George Washington

---

## Running the program

In the command line, enter the following:

``node CLI.js``

The program will then take the user through a series of prompts where he/she can either read an existing flashcard or write a new flashcard.

<p align="center">
<img width="573" alt="make_or_read" src="https://cloud.githubusercontent.com/assets/23643322/26285513/4eec3a42-3e17-11e7-87db-53ac32b57906.png">
</p>

If you try to read a flashcard when there are no flashcards created, you will receive an error message.

### Writing a new flashcard

If the user selects "write" when prompted to select between "read" or "write" a flashcard, the user will then be asked what type of flashcard he/she wishes to create: _Basic Card_ or _Cloze Card_.

<p align="center">
<img width="572" alt="basic_or_cloze" src="https://cloud.githubusercontent.com/assets/23643322/26285512/4eeb27f6-3e17-11e7-964a-ffe568596798.png">
</p>

Then, the program will keep prompting the user to write the question/statement and the answer/completion word

<p align="center">
<img width="570" alt="name_text_answer" src="https://cloud.githubusercontent.com/assets/23643322/26285515/4eed13f4-3e17-11e7-9bb4-bcf89231a404.png">
</p>

If the user selects *Cloze Card* and tries to enter an _answer/completion word_ that is not included in the original full text, the program will throw an error and terminate.

### Reading a flashcard

If the user selects "read" when prompted to choose between "read and "write", The user will be shown the list of all cards available.

<p align="center">
<img width="568" alt="what_card_to_read" src="https://cloud.githubusercontent.com/assets/23643322/26285511/4eeab348-3e17-11e7-9cc7-457f32143553.png">
</p>

When the user selects an option, the program will ask the user to try to answer the question or complete the statement. 

<p align="center">
<img width="570" alt="enter_answer" src="https://cloud.githubusercontent.com/assets/23643322/26285514/4eecca48-3e17-11e7-8903-3b85ea0a5da4.png">
</p>

The program will then proceed to tell the user if the answer was correct or incorrect and display the question and answer.

<p align="center">
<img width="570" alt="result" src="https://cloud.githubusercontent.com/assets/23643322/26285516/4eee2ed8-3e17-11e7-8de0-f86184ae1369.png">
</p>

