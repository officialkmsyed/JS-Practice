//This - Used for current context

const user = {
  username: "Syed",
  price: 999,
  welcome: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
// user.welcome();
// user.username = "Khishamuddin";
// user.welcome();

// console.log(this); //In NODE Environment THIS syntax is refers to the empty{} object but in Browser THIS syntax refers to WINDOW, because in time before to run JavaScript the engine is only available in browsers but nowdays the engine is sperately porivded for example, NODE, etc.

//---------------------------------------------------------------------------

//Lets see how ARROW function works:

// DONT's

// Type 01 Donts:
// function chai(){
//   console.log(this); //we not use THIS in function by this type
// }
// chai()

// Type 2 Donts:
// const chai = function() {
//   console.log(this); //we not use THIS in function by this type
// };
// chai();

// DO's: That the right way to use THIS in Function and therefore this syntax called Arrow Function

// This is ARROW Function syntax : () => {}

// Type 01
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumbers(2, 2)); //Out=> 4

// Type 02: Implicit function

const addTwo = (num1, num2) => num1 + num2; //This Function Technique Very Used in React
console.log(addTwo(2, 2)); //out=> 4



//ERROR IS I am not declare any return value so, value doesnot access -----------

const addThree = () => ({ username: "Syed" });//This also an object Technique

//How to acces this code

//Type 01
// Call the addThree function and store the returned object in a variable
const userObject = addThree();
// Access the username property of the returned object
console.log(userObject.username); // Output: "Syed"

//Type 02

// Access the username property directly without storing the returned object
console.log(addThree().username); // Output: "Syed"

// =============================================================================================