const name = "hitesh" //old version
const repoCount = 50 // old version

// console.log(name + repoCount + " Value"); this is the older version of JavaScript


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //latest sysntax for string to print isko string interpolation kehe hai.

const gameName = new String('hitesh-hc-com') //one more method to declare stirng, it look pretty much, and code is readable  

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

/* ---------------------------- Notes ------------------------------------- 
 Differe string type learn from w3school

*/