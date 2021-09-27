/*
Task 6: Battleship

Create a 5x5 Battleship game using a multidimensional char array. Use asterisks to mark the ships. In a loop ask the user for coordinates to shoot in and give feedback to the user whether they hit a ship or not. If you want you can create a bigger array and add bigger ships. Keep count of how many shots the player needed.

Ships matrix
*        A B C D E
*      1 _ _ _ _ _
*      2 _ * _ _ _ 
*      3 _ * _ _ _
*      4 _ * _ _ _
*      5 _ _ * * *
*/
const BOARD_SIZE = 5;
let board = [];

for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
        board[i] = new Array(' '); // Let's initialise everything empty
    }
}
// Let's set the ships
board[1][1] = '*';
board[2][1] = '*';
board[3][1] = '*';
board[4][2] = '*';
board[4][3] = '*';
board[4][4] = '*';
let numberOfShips = 6;
let x, y; // Variables for coordinates
let bodyCount = 0; // Variable for sunk ships
let shots = 0;

// Ask user to enter coordinates
process.stdout.write("\n\nEnter x and y coordinates separated by space: ");

process.stdin.on("data", function(inputFromUser){
    let userInput = inputFromUser.toString().trim().split(" ");
    let x = Number(userInput[0]);
    let y = Number(userInput[1]);

    // Check whether shot is within range
    if (x > BOARD_SIZE - 1 || y > BOARD_SIZE - 1 ) {
        process.stdout.write("Input out of range. Please enter valid coordinates.");
    } else {
        if( board[x][y] == '*' ) {
            process.stdout.write("You hit a ship!\n");
            board[x, y] = ' '; // Hit -> let's set this to empty
            bodyCount++; // Let's increase the number of ships hit
        } else {
            process.stdout.write("Miss!\n");
        }
        shots++; // Let's increase the number of shots
    }

    if (bodyCount < numberOfShips) { // Loop for as long as there are ships to sink
        process.stdout.write("Enter x and y coordinates separated by space: ");
    } else {
        process.stdout.write("All ships sunk! You needed " + shots + " shots.\n\n\n");
        process.exit();
    }
})

                

                