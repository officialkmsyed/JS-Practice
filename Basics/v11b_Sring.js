//W3School.com - Reference Site: https://www.w3schools.com/js/js_string_methods.asp

// Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

// List if JavaScript String Methods

// 01.String length
// 02.String charAt()
// 03.String charCodeAt()
// 04.String at()
// 05.String [ ]
// 06.String slice()
// 07.String substring()
// 08.String substr()
// 09.String toUpperCase()
// 10.String toLowerCase()
// 11.String concat()
// 12.String trim()
// 13.String trimStart()
// 14.String trimEnd()
// 15.String padStart()
// 16.String padEnd()
// 17.String repeat()
// 18.String replace()
// 19.String replaceAll()
// 20.String split()

// Examples

//01 Type. String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(text); //Output is => ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(length); //Output is => 26

//02 Type. String charAt()
let text1 = "HELLO WORLD";
let charAt = text1.charAt(1);
console.log(text1); //Output is => HELLO WORLD
console.log(charAt); //Output is => E

//03 Type. String charCodeAt()
let text2 = "HELLO WORLD";
let charCodeAt = text2.charCodeAt(0);
console.log(text2); //Output is => HELLO WORLD
console.log(charCodeAt); //Output is => 72

//04 Type. String split()
let text4 = "HELLO WORLD";
let split = text4.split();
console.log(text4); //Output is => HELLO WORLD
console.log(split); //Output is => 72

//One More method to declare string

let gameName = new String("Hello Syed G and World!"); //is mehtod se ouput string ke from a raha hai //MERA OBSERVATION
console.log(gameName);
console.log(gameName.charAt(0));

let gamePower = gameName.substring(2, 3 | undefined);
console.log(gamePower);
