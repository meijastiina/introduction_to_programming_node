/* 
Task 3.2 - Numbers 0-20 2
Create a code that prints out numbers from 0 to 20. Use Do-while loop.

Modified from DoWhileLoop.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Let's create a variable for the number to be printed
let  numberToPrint = 0;

// Let's print out heading
process.stdout.write( "\n Numbers from 0 to 20 are the following:\n\n ") ;

// Let's loop through the numbers
do {
   process.stdout.write(" " + numberToPrint);
   numberToPrint++;
} while(numberToPrint <= 20) ;

process.stdout.write( "\n\n") ;
