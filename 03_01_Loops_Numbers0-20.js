/* 
Task 3.1 - Numbers 0-20
Create a code that prints out numbers from 0 to 20. Use while loop.
*/
// Modified WhileLoop.js (c) Kari Laitinen http://www.naturalprogramming.com

// Let's create a variable for the number to be printed
let  numberToPrint  =  0 ;

// Let's print out the heading
process.stdout.write( "\n Numbers from 0 to 20 are the following:\n\n") ;

// Let's loop through numbers from 0  to 20
while(numberToPrint <= 20) {
   process.stdout.write(" " + numberToPrint);
   numberToPrint++;
}

process.stdout.write( "\n\n") ;
