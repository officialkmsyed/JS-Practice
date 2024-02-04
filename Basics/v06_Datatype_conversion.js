// let score=33 // datatype is in number
// console.log(typeof score) // datatype is in number - uncomment this if want explanantion



// convert string into number (this not a pure number so output come as NaN)
let score = "33abc";
console.log(typeof score); // string

// i want to convert it into in number

let valueInNumber1 = Number(score); //let assign 2nd datatype "valueInNumber" and convert it into in number, but in syntax use capitla Number(Datatype to convert)
console.log(typeof valueInNumber1); // datatype is number
console.log(valueInNumber1); //datatype is converted into in number but output is 'NaN (Not a Number)' because '33abc' not a pure number, Nan is also a special type


// lets conver string datatype into pure-number Datatype 
let accountId = "123"; //assign datatype value string as '123'
console.log(typeof accountId); //output is string
let valueInNumber2 = Number(accountId); //coversion of string into number
console.log(typeof valueInNumber2);  //output is number



//lets check value for null
let d=null
console.log(typeof d); //output of null typeof is object
let valueNullinNumber = Number(d) // convert into 
console.log(typeof valueNullinNumber); //number as ouput because after conversion
console.log(valueNullinNumber); //Number me convert hone ke bad is ki value 0


/* -----------------------Notes--------------------------------

Coonversion of dataTypes in Number

"33"(String) => 33 
"33abc" (String) => NaN (because string isnot a pure number)




*/