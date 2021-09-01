/*2.3 Task 3: Even or Odd
Write a simple program to figure out whether a given number is even or odd. 
Hint! You can use modulo (%) to achieve this.
Modified from Evenodd.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Let's ask for a number
process.stdout.write("\nThis program can find out whether a number\nis even or odd. Please, give a number: " );

// Let's read in user input
process.stdin.on( "data", function( inputFromUser ) {
    // Let's create a variable for user input. Number converts it to a number.
    let givenNumber = Number(inputFromUser);
    /*  The remainder operator % is used to test whether the given number is even or odd.
        The remainder operator returns the remainder left over when its left operand is divided by its right operand.
    */   

    // Here we test whether given number divided by 2 gives a remainder of 0
    if((givenNumber % 2) == 0) {
        // Remainder of givenNumber/2 is indeed 0 -> givenNumber is an even number
        process.stdout.write("\n" + givenNumber + " is even.\n\n");
    } else {
        // Remainder of givenNumber/2 is NOT 0 -> givenNumber is an odd number
        process.stdout.write("\n" + givenNumber + " is odd. \n\n");
    }
    // Let's end the process
    process.exit() ;
});

