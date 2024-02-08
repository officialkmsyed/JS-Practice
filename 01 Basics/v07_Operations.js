// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); Not a professional way to do, not do this!
// console.log(+"");   Not a professional way to do, not do this!


// Not a professional way to do, not do this! --------------------------------------
let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix ++g and postfix g++ presedence operator
console.log(gameCounter);

// ----- professional way to write prefix and postfix Increment operator by MDN Reference  ------


// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. 


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"   Yaha per direcct b =x hoga aur x ki vlaue badhe gi

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"     Yaha per pehle x ki value badhe gi phir woh b = hoga


/*--------------------------Example and  link to study
- https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/