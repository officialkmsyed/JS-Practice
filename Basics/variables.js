const accountId = 1234;   //cons is the syntax of constant just like in c and java
let accountEmail = "kmsyed@syed.com"; // used this Let for declarations of variables
var accountPassword = "12345";      //not used this syntax
accountCity = "Aurangabad";         //not used this syntax to save as varibale

// accountId = 2;

accountEmail = "syed@syed.com";
accountPassword = "1234567890";
accountCity = "Pune";

console.log(accountId);
console.table([accountEmail, accountCity, accountPassword]);


/* 
----------------------------   Notes -------------------------------------

- Not Used Var because issues in block scope and functional scope | { } ex: for {}, if {}
(var not detrmine the variables easily)

---------------Other Syntax ------------------
Console.log() - to declare output

----------------- Used -----------------------
const - for constant
let - for variables

----------------- Not Used -------------------
var like var accountName
and without var syntax like direct accountName etc
*/