//For LOOP

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if(element===5){
//     console.log(`Iam 5`);
//   }
//   console.log(`${element} i am not 5`);

// }

//--------------------------------------------------------------

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(`Inner loop ${j} and Inner Loop ${i}`);
  }
}

// for (let i = 0; i <= 6; i++) {
//   for (let j = 0; j < 6; j++) {
//     console.log(`${i * j}`);
//   }
// }

//------------------------------------- BREAK ------------------------------------

for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    console.log("Hi 5");
    break;
  }

  console.log("Bye Bye");
}

//============================ CONTINUE =================================

for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    console.log("Hi 5");
    continue;
  }

  console.log("Bye Bye");
}
