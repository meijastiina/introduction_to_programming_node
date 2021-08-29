
//  Modified from Game.js (c) Kari Laitinen http://www.naturalprogramming.com

// Here we print out a message
process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

// Here we create an event handler to listen to on event of stdin
// inputFromUser carries the input given by the user
process.stdin.on( "data", function( inputFromUser )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   // Here we create a number to store the user input
   let givenNumber = Number( inputFromUser ) ;
   // Let's create a constant for our secret number and set the value
   const SECRET_NUMBER = givenNumber + 1;

   // Let's print out the message about losing/winning
   process.stdout.write( "\n You typed in " + givenNumber + "."
                      +  "\n My number is " + SECRET_NUMBER  + "."
                      +  "\n Sorry, you lost. I won. The game is over.\n\n" ) ;

   process.exit() ;

} ) ;





