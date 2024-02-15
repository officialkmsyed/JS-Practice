// Do while

myArray = ["Flash", "BatMan", "SuperMan"];
arr = 0;
while (arr < myArray.length) {
  console.log(`${myArray[arr]}`);
  arr = arr + 1;
}

//-------------------------DO WHILE-------------------------------------------

//Do wile used when the program runs first and then condition will check

// let score = 111; //Special Case in Do While 

do {
  console.log(`Score is ${score}`);
  score++; //Increment Operator
} while (score <= 10);
