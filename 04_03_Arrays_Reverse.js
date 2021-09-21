
/*
    Task 04.01. Arrays - Reverse
    Create a program that keeps asking the user to input numbers. These numbers are stored in an array. Keep asking till zero is entered. After that the numbers are printed out in a reverse order.
    Modified from Reverse.js (c) Kari Laitinen  http://www.naturalprogramming.com
*/
// Let's create a new empty array.
let givenNumbers = [] ;

// Prompt user for input
process.stdout.write( "\n This program reads numbers from the keyboard. \n After receiving a zero, it prints the numbers\n in reverse order. Please, start entering numbers.\n The program will stop when you enter a zero.\n\n" ) ;

process.stdout.write(" " + givenNumbers.length + " Enter a number: ");

// Read user input
process.stdin.on( "data", function(inputFromUser) {
    // This function will be executed always after the user has typed in a number.
    let numberFromKeyboard = Number(inputFromUser);

    // The push() method adds the number to the end of the array.
    givenNumbers.push(numberFromKeyboard);

    // If number is zero
    if (numberFromKeyboard == 0) {
        // Print out the array in reversed order
        process.stdout.write( "\n Reverse order:  " );
        // Create an iterator variable
        let i = givenNumbers.length;
        // Loop through items in reverse order
        while(i > 0 ) {
            i--;
            process.stdout.write(givenNumbers[i] + " ");
        }
        process.stdout.write( "\n\n" ) ;
        process.exit() ;  // This terminates the program.
    } else {
        // We are not finished. Let's ask for one more number.
        // The length property tells how many elements the array has,
        // i.e. how many numbers have been entered.
        process.stdout.write(" " + givenNumbers.length + " Enter a number: ");
   }
});