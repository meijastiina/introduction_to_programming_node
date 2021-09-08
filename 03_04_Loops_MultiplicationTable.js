/* 
3.4 Task 4: Multiplication Table
Ask the user to enter a number and then print out corresponding multiplication table using a loop.
*/
// Let's get utilities for string formatting purposes
const UTIL = require('util');

// Prompt the user
process.stdout.write("Please enter a number: ");

// Read in user input
process.stdin.on("data", function(inputFromUser){
    // Let's create a variable for user input
    let givenNumber = Number(inputFromUser);
    // Let's create a variable for iterator
    let i = 1;
    process.stdout.write(UTIL.format("Multiplication table for %s\n", givenNumber));
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    // Loop from 1 to 10
    while (i <= 10) {
        process.stdout.write(UTIL.format('*%s * %s = %s', i.toString().padStart(7, " "), givenNumber, (i * givenNumber)).padEnd(24, " ") + "*\n");
        // Let's increment the iterator
        i++;
    }
    process.stdout.write(UTIL.format("%s\n", "".padStart(25, "*")));
    // Terminate program
    process.exit();
})