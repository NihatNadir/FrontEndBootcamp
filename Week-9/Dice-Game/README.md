# Dice Game - React Application
### [Visit Project](https://dicee-game-six.vercel.app/)

This is a fun dice-rolling game built with React. Players can edit their names, roll dice, and the app determines the winner based on the dice outcomes. The game includes dice images and sounds for an immersive experience.

## Features

- **Dice Rolling**: Players can roll two dice, and the app will determine the winner based on the dice values.
- **Editable Player Names**: Players can click on their names to edit them.
- **Sound Effects**: Dice rolling sound effects when the dice are rolled.
- **Responsive Design**: The game is designed to be responsive and works well on both mobile and desktop devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **useState Hook**: Used for managing the state of player names, dice values, and game state.
- **CSS**: Styling of the game components using CSS for layout and design.
- **JavaScript**: Used to handle the game logic, such as rolling the dice and determining the winner.
- **Audio**: Sound effects are played when the dice are rolled using the `Audio` object in JavaScript.
- **Images**: Dice images (dice1.png, dice2.png, etc.) are used to represent the dice rolls.

## Project Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/dice-game.git
    ```

2. Navigate to the project directory:

    ```bash
    cd dice-game
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Components

- **Section**: The main component that contains the game logic and renders the dice, player names, and results.
    - `useState`: Handles the state of dice rolls, player names, editing modes, and game status.
    - `handleClick`: Function that simulates the dice rolling, updates the dice values, and determines the winner.
    - `handleEdit`: Toggles the editing mode for player names.
    - `handleInputChange`: Updates the player names when changed.
    - `handleBlur`: Saves the player name or reverts it if empty when the user clicks outside the input field.
    - `playSound`: Plays a dice roll sound effect when the dice are rolled.

## Styling

- **CSS**: The application is styled using standard CSS in `Section.style.css`. Custom styles are applied to the game elements such as the dice images, buttons, and input fields.

## Images and Sounds

- **Dice Images**: The dice images (`dice1.png`, `dice2.png`, etc.) represent the outcomes of the dice rolls and are displayed next to the players.
- **Sound Effects**: A dice roll sound (`dice.mp3`) is played when the dice are rolled to enhance the user experience.

## How It Works

1. **Editable Player Names**: The player names are initially set to "Click to edit" for Player 1 and "Player 2" for Player 2. Players can click on their names to edit them.
   
2. **Rolling the Dice**: When the "Roll the Dice" button is clicked, the dice are rolled, and the random numbers are generated. The images for the dice roll are updated, and the result is displayed.

3. **Determining the Winner**: After the dice are rolled, the app compares the dice values for both players and announces the winner. If the dice values are equal, the result is a draw.

## Future Improvements

- **Timer**: Add a countdown timer for each round.
- **Multiplayer**: Allow more than two players to participate in the game.
- **Animations**: Enhance the game with dice animation effects when rolled.
