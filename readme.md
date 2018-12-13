ABOUT THE GAME:

The game is basically a "cute" version of the popular "shell game" in which there are 3 cups and an item to be hidden under one of the randomly-selected cups, usually a ball. In this game, the item to be hidden under the randomly-selected cup is a donut (Pusheen's donut).

A cup is selected at random, and the donut goes underneath that cup and out of the user's view. The cups are then shuffled randomly. Users then click on the cup they think is hiding the donut.


TECHNOLOGIES USED / APPROACH TAKEN:

CSS animations were used for the shuffling movement. The cup is selected at random, as is each possible shuffle and the sequence of the shuffles. The selected cup was assigned a class 'winner', which is what was used to detect whether or not the cup that the user clicked on was the correct cup. Once the cups were placed down, the donut image was removed from the game body. When the cup-shuffling sequence ended, and before the user was allowed to click on the cups to make their guess, the donut image was re-appended onto the correct cup spot (identified by the presence of the class 'winner').

Whether or not the cup selected was correct or wrong, a pop-up (win/lose) was displayed, along with a cute image/gif of Pusheen corresponding to the 'win/lose' message. The user then has the option to play again, if desired.


UNSOLVED PROBLEMS:

No unsolved problems, but could/should refactor the code as to make it more DRY. Also, could add different levels of difficulty to the game by adjusting the speed of the shuffle, or the number of shuffles. This could also be used in the implementation of a scoring system (e.g. if the speed chosen is 'CRAZY' vs 'EASY', the user would score more points for a correct result).

===================================================================


<!-- # ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** -- since you've already gotten your feet wet with Tic Tac Toe, it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!

One instructor will approve your project before you begin. Please prepare the [pre-project materials.](/pre-project-exercise.md)

We will be doing an app [soft launch](/soft-launch.md) two days before the project due date.

---

### Technical Considerations

Your app should:

* **Display a game in the browser**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it**
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Required Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don't be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you'll be getting into.
* **Don't be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you're trying to figure out how to change some text when the game is over but you haven't solved the win/lose game logic, you can create a button to simulate that until then.

---
### Agile Workflow
* small problems make large problems easier to solve.
* agile user stories might not be applicable to all games, but there are [console-style game agile workflows](game-exercise.md) available.
---

### Potential Project Ideas

##### Blackjack
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

##### Concentration
Sometimes just called "Memory", it's a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. If you get all the matching cards, you've won!

---

### Feedback + Evaluation
The project is meant to demonstrate that everyone is minimally capable of __applying__ the things we saw during class.

Given __Bloom's Taxonomy__ students should be able to apply their knowledge of HTML, CSS and javascript. Students must remember enough of the concepts to to understand how to apply their knowledge / build this project.

Specifically each project must include the following code:

- use a function, loop & conditional
- set an event listener for a click, on change or other
- use html tags to build a page on screen, either directly in an HTML file, or with the DOM
- arrange elements on the screen using css box model, position or display
- write CSS selectors using classes or ids


![https://cft.vanderbilt.edu/wp-content/uploads/sites/59/Blooms-Taxonomy-650x366.jpg](https://cft.vanderbilt.edu/wp-content/uploads/sites/59/Blooms-Taxonomy-650x366.jpg)---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_
 -->