
/* 
Task 04.02. Arrays - Average
Create a program that asks user for number and calculates the average for them. Numbers will be asked till the user enters a letter.
Hint! You can check whether a value is numeric with isNaN().
Modified from: MeanvalueArray.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Let's create an array for user input
let numbersFromUser = [];

// Prompt user for number
process.stdout.write( "\n This program calculates the mean value of\n the numbers you enter from the keyboard.\n The program stops when you enter a letter.\n\n" ) ;

process.stdout.write("Enter a number: ");

// Read in input
process.stdin.on("data", function(inputFromUser) {
    // This function will be executed always after
    // the user has typed in a number.
    let numberFromKeyboard = Number(inputFromUser);

    // Check if the entered value is numeric
    if(isNaN(numberFromKeyboard)) {
        // The user typed in a 'Not-A-Number', which means that the
        // user gave a letter in order to terminate this program.

        // Let's create a variable where to store the sum of given numbers
        let sum = 0;

        // Let's loop through the array
        for (let i = 0; i < numbersFromUser.length; i++) {
            sum = sum + numbersFromUser[i];
        }
        // Let's create a variable to store the calculated mean value
        let average = 0;
        if(numbersFromUser.length > 0) {
            average = sum / numbersFromUser.length;
        }

        process.stdout.write("\nThe average is: " + average + " \n\n");

        process.exit() ;  // This terminates the program.
    } else {
        // We will push the number to the end of the array.
        numbersFromUser.push(numberFromKeyboard);
        // We are not finished. Let's ask for one more number.
        process.stdout.write("Enter a number: ");
    }
});
