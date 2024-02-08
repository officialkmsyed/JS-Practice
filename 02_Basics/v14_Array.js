//Array: The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//----------------------------------------------------------------------------------

//Description: In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//----------------------------------------------------------------------------------

const myArr = [1, 2, 3, 4, 5]; //Same as we can include also different types of dataTypes in single Array

console.log(myArr); //out=> [ 1, 2, 3, 4, 5 ]
console.log(myArr[0]); // out=> 1  | it is used to access the array element

//Push methods in array
myArr.push(6); //out=> [ 1, 2, 3, 4, 5, 6 ]
console.log(myArr);

//Pull methods in array
myArr.pop(6); //Jout=> o value parenthesis ke andar hai usko nikale ga but.....
console.log(myArr); //out=> [ 1, 2, 3, 4, 5 ]
myArr.pop(); // but..... value na ho to last value ko nikale ga
console.log(myArr); //out=> [ 1, 2, 3, 4 ]

//Join method


const newArr = myArr.join(); //by this the array is converted into string

console.log(myArr);
console.log(newArr);
