/* 
5.5 Task 5 Smileys
Create a program that has the following functionality:
1.	Ask the user for a string and store it in a variable.
2.	replaceSmileys(text): Finds smileys in text and replaces them with spaces.
3.	replaceSmileys(text, replacer): Finds smileys in text and replaces them with replacer.
Print out the text.


Hint: you can use a regular expression in your replace methods.

*/
process.stdout.write("\nPlease enter a string: ");
process.stdin.on("data", function(inputFromUser){
    let userInput = inputFromUser.toString().trim();
 
    let newString = replaceSmileys(userInput);
    process.stdout.write("Replaced text: " + newString + "\n");

    newString = replaceSmileysWithReplacer(userInput, "*");
    process.stdout.write("Replaced text (*): " + newString + "\n\n\n");
    process.exit();
})

function replaceSmileys(text) {
    let newString = text.replace(":)", "*smiling*");
    newString = newString.replace(":(", "*sad*");
    newString = newString.replace(";)", "*winkwink*");
    newString = newString.replace("<3", "*love*");
    return newString;
}
function replaceSmileysWithReplacer(text, replacer) {
    let regexp = /([:|;]+[)|(])|<3/g
    return text.replace(regexp, replacer);
}