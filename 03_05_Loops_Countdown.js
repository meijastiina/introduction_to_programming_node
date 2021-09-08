/*
3.5 Task 5: Countdown
Print out numbers from 10 to 0 using a loop.
*/

const { time } = require("console");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");

// Let's create an iterator variable
let i = 10;

process.stdout.write("\n10 seconds to ignition... Starting countdown...");
while(i > 0) {
    // Print out the start count
    process.stdout.write("\n..." + i + "...");
    // Let's decrement iterator value
    i--;
}
process.stdout.write("\nIGNITION!!\n\n");

