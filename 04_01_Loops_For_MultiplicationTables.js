/* 
4.1 Task 1: Multiplication Tables 2
Print out multiplication tables for numbers 1-10 using a loop. Use nested for loops.
*/
const UTIL = require('util');
// Lets's loop numbers 1-10
for (let i = 1; i <= 10; i++) {
    // Let's print out a heading for the table
    process.stdout.write(UTIL.format("Multiplication table for %s\n", i));
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    // inner loop to create the tables for each number
    for (let j = 1; j <=10; j++ ) {
        process.stdout.write(UTIL.format('*%s * %s = %s', j.toString().padStart(7, " "), i, (j * i)).padEnd(24, " ") + "*\n");
    }
    // Footer for the table
    process.stdout.write(UTIL.format("%s\n", "".padStart(25, "*")));
}
// Terminate program
process.exit();