// Numbers Notes DataTypes

//Assign a vlaue of const as an number
const Score = 100;
console.log(Score); //out =>100

const balance = new Number(100);
console.log(balance); //out => [Number: 100]

// Example 02    //Convert score Number type is to String Datatype
const balanceString = String(balance);
console.log(typeof balanceString); //out => string
console.log(balanceString.length); //out => 3
console.log(balanceString.charAt(2)); //out => 0

// Example 03   // Example 02 ko ek aurtarike se convert ka sakte hai
//String k oncvert karn aho to usko aisa bhi kar sakte

console.log(typeof balance.toString()); //out => string
console.log(balance.toString().length); //out => 3 //driect string karke uski length malooom karna hai

//To fixed Ka Kaam: Decimal ke bad ka number kinte hona woh batatat hai
console.log(balance.toFixed(2)); //out => 100.00  jaisa ke isme 100 ke bad . aur phir two zeros 00 hai, toFixed(1) karo to phir 100.0 sirf ek zero ayega

//To precision(): (Ye total numbe rke digits ko assign karta hia niche example dekho) Number of significant digits. Must be in the range 1 - 21, inclusive.
const oneNumber = 29.843849;
console.log(oneNumber.toPrecision(2)); //out => 30  jo precise value hai woh nikal kar aye hai, 29.8 hai to direct 30
console.log(oneNumber.toPrecision(3)); //out => 29.8
console.log(oneNumber.toPrecision(5)); //out => 29.844
console.log(oneNumber.toPrecision(4)); //out => 29.84
