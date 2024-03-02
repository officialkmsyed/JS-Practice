// Nested Function - CLOSURE - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function one() {
  const username = "Syed";

  function two() {
    const website = "YouTube";
    console.log(website);
    console.log(username);
  }
  console.log(username);
  two();
}

one();

// ===================================================================================
// Hoisting: In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//Type one to declare fucntion
console.log(addOne(5)); //out=>6,it is work even declare before function scope, because this is hoisitng method and these works if function is declare witout const, see in example. given below type 02.
function addOne(num) {
  return num + 1;
}

//Type 02 to declare hoisting in function
// console.log(addTwo(5));  //This console give error because it is given before scope
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); //out=> 7 because this console is declare in after function declaration


// -------------------TIPS-----------------------
// Hoisting is nothing but declaration context, to obtain place where to declared