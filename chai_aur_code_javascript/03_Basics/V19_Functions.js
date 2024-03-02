// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

function helloWorld() {
  console.log("Hello");
  console.log("World");
  console.log("!");
}

// helloWorld - this is reference and when put parenthesis after reference then it is Execution
helloWorld();

//2nd Example

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(4, 5);
// at the time of defining function we put Parameters in () and when we call the we put Arguments()