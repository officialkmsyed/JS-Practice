// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

//To remove the pollution of global scope therefore IIFE is usedS

//------------------------------------------------------------------------
//Normal Function
function chai() {
  console.log(`DB Is Connected`);
}
chai(); //Out=> DB is Connected

//But in IIFE --------------------------------------------------------------

//Type 01 IIFE: Named IIFE
(function chai2() {
  console.log(`This Is IIFE Function Syntax`);
})();

//Type 02 IIFE: Simple/UnNamed IIFE : Function IIFE in ARROW Function
(() => {
  console.log(`Hey, I am IIFE Arrow Function`);
})();

//Type 02.b IIFE: UnNamed IIFE with parameter: Function IIFE in ARROW Function
((name) => {
    console.log(`Hey ${name}, I am IIFE Arrow Function`);
  })("Syed");
