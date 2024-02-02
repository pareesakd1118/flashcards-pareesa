# Flash Cards
### Abstract:
I made a game which can be played directly in the users terminal. The game is set up much like flash cards, in which each round of the game the user is presented a question in the terminal as well as 3 possible answers. To select an answer the user either can directly type the number that corresponds to the answer they would like to select (1, 2 or 3) into the terminal, or use the up and down arrows to select the desired answer, which will be highlighted as blue, and press enter to lock the answer in. Upon pressing enter the first time, a message will appear in the terminal declaring whether the answer was correct or not, while pressing enter again will show the next "flash card"/question. There are 50 total "flash cards" in the deck, and once the final card has been answered, a message will appear in the terminal announcing the percent of questions answered correctly. 

### Preview of App:
 ![screen shot of Idea Box Web App](./assets2/Screenshot-IdeaBox.png)

### Technologies Used:
The technologies used in this project are the mocha testing framework used in tandem with chai assertion library. This program was built in a test-driven development manner, such that tests were written before implementation code. The implementation code was written using javascript. 

### Installation Instructions:
1. Fork this repo and copy the SSH Key
2. Navigate to terminal and run `git clone SSH key`
3. Type `cd ticTacToe` in local terminal to navigate to root directory
4. Type `npm install` or `npm i` to install the library dependencies
5. Type `node index.js` to run the file and make the game appear in the terminal
6. To play the game, either type 1, 2 or 3 in the terminal (whichever corresonds to the answer you would like to select) or use the up and down arrow keys to select and answer and press enter once to see whether the answer was correct, and enter once more to see the next question. 
