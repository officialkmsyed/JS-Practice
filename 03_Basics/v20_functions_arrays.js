//In this practice fle i make one shopping cart funtion with objects and arrays

//Rest operator = Spread Operator - It only name efine by its use case

function totalShoppingCart(num1) {
  return num1;
}

console.log(totalShoppingCart(20));

//But i want to add multiple item in single cart
//========================================================================
//So we need to add Rest operator (spread operator)

function shoppingCartRestOp(...num2) {
  return num2;
}

console.log(shoppingCartRestOp(20, 30, 40, 50, 50, 600));

// ======================================================================
//I dont want to put all value in sinlge value, i want single varibles to put my value and then after rest of values put into array, for example
function shoppingCart(val1, val2, ...num3) {
  return val1, val2, num3;
}

console.log(shoppingCart(30, 40, 50, 60, 4000, 4330));
// ===========================================================================
// i want top ut user name in funcitons

const user = {
  username: "Syed",
  id: "1599",
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and Id is ${anyObject.id}`);
}

handleObject(user);
handleObject({
    username: "Sam",
    id: "1234"
})

// ==================================================================
// How to add array in Funtion
const myNewArray = [200,300,400,100,600]

function returnArray(getArray){
    return getArray; //Return complete array~
    // return getArray[0]; //return only 0 position element
}
console.log(returnArray(myNewArray));

// ==========================================================================