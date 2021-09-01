
/*2.5 Task 5: Logical Operators
Write a simple program that asks user for three numbers and create the following logic:
- If all three numbers are equal print out “You entered three matching numbers”.
- If all three numbers are different print out “You entered three different numbers”.
- If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
- If any of the numbers is 2, enter “You entered the magic number 2!”.
*/

// Let's ask user for three numbers, separated by spaces
process.stdout.write( "Please, enter three numbers separated\n with single space characters :  " ) ;

// Let's read in user input
process.stdin.on("data", function(inputFromUser) {
    // The following statements will be executed after the user
    // of this program has typed in a response.

    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split(" ");

    // To get a specific part of the split string, we can use square brackets []. Indices start from 0. Number() converts them into numbers. They need to be converted to numbers to be able to compare them
    let firstNumber  = Number(numbersInString[0]);
    let secondNumber = Number(numbersInString[1]);
    let thirdNumber = Number(numbersInString[2]);

    if ( firstNumber == secondNumber == thirdNumber ) {
        // If all three numbers are equal print out “You entered three matching numbers”.
        process.stdout.write("You entered three matching numbers");
    } else if ( firstNumber != secondNumber && secondNumber != thirdNumber && firstNumber != thirdNumber ) { 
        // If all three numbers are different print out “You entered three different numbers”.
        process.stdout.write("You entered three different numbers");
    } else if ( firstNumber == secondNumber && thirdNumber != firstNumber ) {
        // If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
        process.stdout.write("Third one doesn’t fit");
    }
    if ( firstNumber == 2 || secondNumber == 2 || thirdNumber == 2 ) {
        // If any of the numbers is 2, enter “You entered the magic number 2!”.
        process.stdout.write("\nYou entered the magic number 2!");
    }
    // Let's end the process
    process.exit() ;  
} ) ;
