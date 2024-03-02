// const tinderUser = new Object()   //Singleton Object

//non singleton object
/*

const tinderUser = {};
tinderUser.id = "Syed123"; //id - key, "Syed123" - values
tinderUser.name = "Syed Khishamuddin";
tinderUser.isLoggedIn = false;


//output as keys, values
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));

*/

//-----------------------------------------

const registerUser = {
  email: "Syed@123.com",
  fullname: {
    userfullname: {
      firstname: "Khishamuddin",
      lastname: "Syed",
    },
    adminfullname: {
      firstname: "Holmes",
      lastname: "Sherlock",
    },
  },
};

//console.log(registerUser.fullname);
//console.log(registerUser.fullname?.adminfullname); //  ( ? ) question mark ka used karte hai protection ke liye APIs use karte time, if value not exist then we use if else,

//----------------------------------------------------------------------------------

//ASSIGN all object in one object
const obj1 = { 1: "a", 2: "bye bye", 3: "Hi" };
const obj2 = { 4: "5", 2: "No bye", 3: "Hello" };


//1 method to assign object
const obj3 = {obj1, obj2};  
console.log(obj3); //out => {obj1: { '1': 'a', '2': 'bye bye', '3': 'Hi' }, obj2: { '2': 'No bye', '3': 'Hello', '4': '5' } }

//2 method to assign object
const obj4 = Object.assign({}, obj1, obj2); //{} - This curly braces means guranteed result ({} - First is Target and adter first position is Source, if we not used braces {} so all value goes to first object, but is helpful and professional way to use {} on first position, it is usally used in large production of code.
console.log(obj4); //out=>  { '1': 'a', '2': 'No bye', '3': 'Hello', '4': '5' }

//3 method to assign object - SPREAD Method - 90% of Time we use =d this method - New Mthod - Easy Method
const obj5 = {...obj1, ...obj2}; 
console.log(obj5); //out=>{ '1': 'a', '2': 'No bye', '3': 'Hello', '4': '5' }


