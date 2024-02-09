// Object and Event is the main concepts of JavaScript

//Singleton

Object.create; //Constructor Method

//object literals method

const mySym = Symbol("key1") // declare symbol syntax
const JsUser = {
    name: "Syed",
    age: 18,
    location: "Aurangabad",
    email: "xyz@gmail.com",
    "isLoggedIn" : false,
    lastLoginDays: ["Monday, Tuesday, Wednesday"],
    [mySym]: "mykey1"   //Symbol object declaration syntax
};

//To get the object values 

console.log(JsUser.email);   //xxxxxxxxxxxx Bad way to access Object

console.log(JsUser["name"]);  //this is the right method to access the Object
console.log(JsUser[mySym]);  //Print Symbol object (without double quote)

//How to change object value

JsUser.name='Khishamuddin';
Object.freeze(JsUser); //freeze  all jsUser


JsUser.name='Syed1';
JsUser.email='syed@gmial.com';
console.log(JsUser);

//