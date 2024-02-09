// Object and Event is the main concepts of JavaScript

//Singleton

Object.create; //Constructor Method

//object literals method
const JsUser = {
    name: "Syed",
    age: 18,
    location: "Aurangabad",
    email: "xyz@gmail.com",
    "isLoggedIn" : false,
    lastLoginDays: ["Monday, Tuesday, Wednesday"]
};

//To get the object values 

console.log(JsUser.email);   //xxxxxxxxxxxx Bad way to access Object

console.log(JsUser["name"]);  //this is the right method to access the Object