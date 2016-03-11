# WDI Project: Game

## Space Kitty

### Objective:
- Send Space Kitty into space by correctly answering a set of 5 mathematical equations.<br><br>
- For each mathematical equation that is solved correctly, a piece of a rocket ship will be assembled on the screen.<br><br>
- Once all 5 equations have been answered correctly, the rocket ship will be fully assembled and ready for take off.<br><br>
- After the rocket ship is complete, the player will hit a "Launch" button in order to send the rocket ship, and Space Kitty, into deep space!<br><br>
- Press "replay to start again".

### PseudoCode:
- Use HTML/CSS to create the space ship and the rest of the graphics on the page.<br><br>
- Create a stylized box that holds the mathematical equation.<br><br>
 - The equation will consist of two random numbers 0-10.<br><br>
 - These two random numbers will either be add/subtracted (randomly) by one another.<br><br>
 - The player will then enter their answer and submit to see if their answer is correct.<br><br>
 - If the answer is correct, a part of the space ship will be built.<br><br>
 - If the answer is incorrect, a message will be displayed asking the player to try again.<br><br>
- The Space ship will launch and the game will be over once all 5 questions have been answered correctly.

### Technologies used:
- HTML5
  - Layout of the page.<br><br>
- CSS
  - Structured how the game is supposed to look to the player.<br><br>
- Javascript/JQuery
  - Performs the operations of the game.<br><br>

### Approach Taken:
- I used  the Math.random() to generate a pair of random numbers to be added together.<br><br>
- For each point scored, the player assembles a piece of the rocket ship(becomes visible). Each rocket ship piece was assembled using CSS and was toggled in order to hide it from view. <br><br>
- If the answer is answered incorrectly, the score is still kept and the game informs the player of the correct answer.<br><br>
- In order to make the game a little more interactive, I a made the launch button instead of having the rocket ship take off on its own.

### Installation Instructions:
- Clone file down from Github and open in Chrome.

### Unsolved Problems:
- When the launch button is pressed, the page should automatically reset.<br><br>
- I didn't have enough time to add a picture of a cat onto the rocket ship nor did I have time to add special effects to the flames coming out of the rocket ship.<br><br>
- I would have also like to create the whole background image with CSS.
