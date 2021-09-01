/*1.3 Task 3: Distance Converter version 0.2

Extend the functionality from the previous task to:
1.	Ask for the distance in meters.
2.	Also convert the distance to following units:
o	kilometers
o	miles
o	yards
o	feet
o	inches
o	light years
3.	Show numbers with three decimals.
Modified from Distance.js (c) Kari Laitinen  http://www.naturalprogramming.com
*/

// This creates a constant of utilities module
const util = require( "util" ) ; 

// Print out a message asking for user input
process.stdout.write( "\n This program converts meters to other units of" +  "\n distance. Please, enter a distance in meters:  " ) ;

// Create an event handler to listen for on event for stdin
// User input will be carried in inputFromUser
process.stdin.on( "data", function(inputFromUser){
       // The statements below will be executed automatically after
       // the user has typed in the value.

       // We want to convert the input to number so that we can use it for calculations
       let distanceInMeters = Number(inputFromUser.toString());

       // Let's create constants for conversion rates
       const METERS_TO_KILOMETERS = 1000;
       const METERS_TO_MILES = 6.21371e-4;
       const METERS_TO_YARDS = 1.093613;
       const METERS_TO_FEET = 3.280840;
       const FEET_TO_INCHES = 12;
       const METERS_TO_LIGHTYEARS = 2.99793e8 * 365 * 24 * 3600;

       let distanceInKilometers = distanceInMeters / METERS_TO_KILOMETERS;
       let distanceInMiles = METERS_TO_MILES * distanceInMeters;
       let distanceInYards = METERS_TO_YARDS * distanceInMeters;
       let distanceInFeet = METERS_TO_FEET * distanceInMeters;
       let distanceInInches = FEET_TO_INCHES * distanceInFeet;
       let distanceInLightYears = distanceInMeters / (METERS_TO_LIGHTYEARS);

       process.stdout.write( "\n " + distanceInMeters + " meters is: \n\n" );

       process.stdout.write(util.format( "\t%s kilometers\n", distanceInKilometers.toFixed(3)));
       process.stdout.write(util.format( "\t%s miles \n", distanceInMiles.toFixed(3)));
       process.stdout.write(util.format( "\t%s yards \n", distanceInYards.toFixed(3)));

       process.stdout.write(util.format( "\t%s feet  \n\t%s  inches \n", distanceInFeet.toFixed(3), distanceInInches.toFixed(3)));

       process.stdout.write(util.format( "\t%s light years \n\n", Number.parseFloat(distanceInLightYears).toFixed(3)));

       process.exit() ;
} ) ;

