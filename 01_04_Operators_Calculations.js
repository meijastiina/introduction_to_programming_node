process.stdout.write("Please enter a number: ");

process.stdin.on( "data", function( inputFromUser ){
    let givenNumber = Number(inputFromUser);
    const SECOND_NUMBER = 12;

    process.stdout.write(givenNumber + " + " + SECOND_NUMBER + " = " + (givenNumber + SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " - " + SECOND_NUMBER + " = " + (givenNumber - SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " * " + SECOND_NUMBER + " = " + (givenNumber * SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " / " + SECOND_NUMBER + " = " + (givenNumber / SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " % " + SECOND_NUMBER + " = " + (givenNumber % SECOND_NUMBER));

    process.stdout.write("\n" + givenNumber + "++  = " + ++givenNumber);
    process.stdout.write("\n" + givenNumber + "--  = " + --givenNumber);

    process.exit();
})