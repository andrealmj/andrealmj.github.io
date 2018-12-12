--==START SCREEN==--

When page is first loaded, cute cat image appears. The cat is holding / playing with her ball of yarn. The ball of yarn rolls away under one of the 3 red cups.

"Help the Kitty find her ball of yarn!"

Start button - on click, starts the game play

OR

"Help the Kitty find her ball of yarn!"

(blinking) Start button - on click, starts the game play, sad kitty (image) in the background.

--==AT END OF GAME==--

When yarn is found, happy kitty pops up over screen.

--===GAME PLAY===--

When "start" button is clicked,
1. all cups are lifted up
2. ball goes underneath one of the cups (random). This cup is assigned a class 'WINNER'.
3. all cups are lowered back to original position (ball cannot be seen anymore)
4. cups are shuffled at a set speed
5. when cups stop shuffling, user should click on the cup that they think holds the ball.
6a. if the cup that is clicked has a class 'WINNER', show happy kitty playing with ball.
6b. if the cup that is clicked does NOT have a class 'WINNER', kitty is sad. play again?



--==NEXT LEVEL (DYNAMIC)==--
user can set (i) speed
             (ii) no. of shuffles


SHUFFLING PART:
e.g. swap 0 and 2
if cup2 class === winner, then
remove winner class from 2
add winner class to 0

else if cup 0 class === winner, then
remove winner class from 0
add winner class to 2

