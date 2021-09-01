
/*1.2 Task 2: Distance Converter version 0.1
Create a simple program that converts distance given in miles to kilometers. Print out the output with basic write() and also with util.format().
Modified from Miles.js (c) Kari Laitinen  http://www.naturalprogramming.com
*/

// This creates a constant of utilities module
const util = require("util"); 

// Print out a message asking for user input
// \n creates a new line
process.stdout.write("\nThis program converts miles to kilometers.\n Please, give a distance in miles: ");

// Create an event handler to listen for on event for stdin
// User input will be carried in inputFromUser
process.stdin.on( "data", function(inputFromUser) {
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   // Create a variable to store the distance in miles
   // Number converts text to numbers
   let distanceInMiles = Number(inputFromUser.toString());

   // Create a constant to store the conversion rate to convert miles to kilometers
   const MILES_TO_KILOMETERS_CONVERSION = 1.6093;

   // Create a variable to store the distance in kilometers
   let distanceInKilometers = MILES_TO_KILOMETERS_CONVERSION * distanceInMiles;

   // If we print out just with basic write method without any utility methods we will use concatenation (+) to combine variable values and text
   process.stdout.write("\n " + distanceInMiles + " miles is " + distanceInKilometers + " kilometers.\n");

   // If we use utility method format, we can use parameterised printing. Variable values will replace %d
   process.stdout.write(util.format("\n %d miles is %d kilometers.\n", distanceInMiles, distanceInKilometers));
                         
   // Let's end the process                         
   process.exit();
});





