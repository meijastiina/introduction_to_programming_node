
/* 
7.2 Task 2 Greetings

Create a program that prints out 
-	a greeting if CL parameter greet has been given
-	a farewell if CL parameter bye has been given
*/

let clParameters = process.argv;

if(clParameters.includes('greet')) {
    process.stdout.write("Hello");
    clParameters.forEach(parameter =>{
        let split = parameter.split("=");
        if (split[0] == "name") {
            process.stdout.write(" " + split[1] + "\n\n\n");
        }
    })

}

process.exit();