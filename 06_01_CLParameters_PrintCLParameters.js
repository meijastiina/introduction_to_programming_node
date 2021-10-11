
/* 
7.1 Task 1 Print CL Parameters

Create a program that prints out all given CL parameters.

*/
//  Modified from Commanding.js (c) Kari Laitinen http://www.naturalprogramming.com

/*  The process.argv property returns an array containing
    the command line arguments passed when the Node.js process
    was launched. The first element will be process.execPath.
    The second element will be the path to the JavaScript file
    being executed. The remaining elements will be any additional
    command line arguments (parameters) .  */

let clParameters = process.argv;

console.log( "\n This program was given the following " + clParameters.length + " strings" +  "\n as command line parameters (arguments): \n" ) ;

// Let's loop through found parameters
let i  =  0 ;
while (i < clParameters.length) {
   console.log("     " + clParameters[i]);
   i++ ;
}