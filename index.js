//Challenge 1: 
//Student Grade Generator 
//(Toy Problem)
//Write a program that prompts the user to input student marks. 
//The input should be between 0 and 100. Then output the correct grade as follows: 

//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

//The solution begins here!

// Prompt the user to input the student's marks here
let studentsMark = prompt("Enter the student's mark (between 0 and 100):");

// Convert the input to a number
studentsMark = number(studentsMark);

// Check whether the keyed input is valid
if (isNaN(studentsMark) || studentsMark < 0 || studentsMark > 100) {
    console.log("Input is not valid!");
} else {
  // Determine the student's grade based on the input entered
    let grade;
    if (mark > 79) {
        grade = "A";
    } else if (mark >= 60 && mark <= 79) {
        grade = "B";
    } else if (mark >= 50 && mark <= 59) {
        grade = "C";
    } else if (mark >= 40 && mark <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

  // Output the student's result to get the final grade
    console.log(`The student's grade is ${grade}.`);
}

