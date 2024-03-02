//Array 02 File

const marvelHeros = ['Ironman', 'Spiderman', 'CapatanAmerica'];
const dcHeros = ['Batman', 'Superman', 'Flash'];

//-------------------------------------------
//Concat Operator: Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const allHeros = marvelHeros.concat(dcHeros); 
// console.log(allHeros);

//----------------------------------------------

//Spread ... : 

// const allSpread = [...marvelHeros, ...dcHeros];
// console.log(allSpread);

//----------------------------------------------

//to print array in readable form 
const anotherArr  = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const myRealArray = anotherArr.flat(Infinity);

console.log(myRealArray);

//===========================================

// to find the type is array or not 

console.log(Array.isArray('Syed')); //out => false
console.log(Array.from('Syed')); //out=> [ 'S', 'y', 'e', 'd' ]

console.log(Array.from({name:'Syed'})); //INTERVIEW Questions


