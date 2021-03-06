
/* 2.1 Task 1: Largest Number v.0.1
Create a simple program in which the user is asked to give two numbers and then your program prints out which one of them is largest.
Modified from LargestNumber.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Let's ask user for three numbers separated by spaces
process.stdout.write( "\n This program can find the largest of two\n numbers you enter from the keyboard.\n Please, enter two numbers separated\n with single space characters :  " ) ;

// Let's read in user input
process.stdin.on( "data", function( inputFromUser ) {
    // The statements below will be executed automatically after
    // the user has typed in the numbers.

    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split(" ");

    // To get a specific part of the split string, we can use square brackets []. Indices start from 0. Number() converts them into numbers. They need to be converted to numbers to be able to compare them
    let firstNumber  = Number(numbersInString[0]);
    let secondNumber = Number(numbersInString[1]);
    
    // Let's create a variable to store the largest number
    let foundLargestNumber ;

    // Is firstnumber larger than secondnumber
    if (firstNumber > secondNumber) {
        // firstnumber is larger than secondnumber
        foundLargestNumber  =  firstNumber ;
    } else {
        // firstnumber is NOT larger than secondnumber -> second number is larger
        foundLargestNumber  =  secondNumber ;
    }

    // Let's print out the result
    process.stdout.write( "\n The largest number is " + foundLargestNumber  +  ".\n\n" ) ;

    // Let's end the process
    process.exit() ;
}) ;




