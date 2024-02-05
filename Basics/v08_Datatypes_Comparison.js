console.log("2" > 1); // Its a bad practice, we need to compare same datatypes

// null comparison alwasy avoid this convesion use only clean code

console.log(null > 0); //flase
console.log(null == 0); //fales
console.log(null >= 0); //true

console.log(undefined == 0); //false

// null and undefined vlaue consider as different datatype so we cant use them

// Use of tripe equal ===
console.log("0" == 0); // Result True because double equal se JS convert kakre value check kart ahai but triple equla se woh strictl datatype bhi check karta hai like
console.log("0" === 0); //Result False
