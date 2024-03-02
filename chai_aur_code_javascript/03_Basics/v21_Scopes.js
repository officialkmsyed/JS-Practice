// Scopes {}
//If curly braces{} with Object then itis for object declaration
//If curly braces{} with function and ifelse the this braces called - scope{}

let a = 300; //Global Scope - means the value of declared a is maintain in whole code

if (true) {
  let a = 20; //Local Scope - means the value of a is only consider in this if scopes, only.
  const b = 40;
  console.log(a); //out=> 20; Local Scope
}

console.log(a);//out=> 300; Global Scope

//Tips of Interview: Global and Local Scope in Windows and BrowserConsole and VSCode is Different