// Date and time

//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

//Examples for practice

const myDate = new Date(); //myDate is instance and Date() is object

console.log(myDate); // out => 2024-02-08T08:56:19.388Z
console.log(myDate.toString()); // out => Thu Feb 08 2024 08:56:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // out => Thu Feb 08 2024
console.log(myDate.toISOString()); // out => 2024-02-08T08:56:19.388Z
console.log(myDate.toJSON()); // out => 2024-02-08T08:56:19.388Z
console.log(myDate.toLocaleDateString()); // out => 2/8/2024
console.log(myDate.toLocaleTimeString()); // out => 8:56:19 AM
console.log(myDate.toTimeString()); // out => 08:56:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // out => Thu, 08 Feb 2024 08:56:19 GMT
console.log(myDate.getTimezoneOffset()); // out => 0

console.log(typeof myDate); // out=> object

//Our own date declration

const myCreatedDate = new Date(2003, 0, 8);
console.log(myCreatedDate.toLocaleDateString()); //out => 1/8/2003

const myTimeDate = new Date(2003, 0, 8, 1, 30, 45);
console.log(myTimeDate.toLocaleTimeString()); //out => 1:30:45 AM
console.log(myTimeDate.toLocaleString()); // out=> 1/8/2003, 1:30:45 AM

//--------------- Find date day month by simply get command
console.log(myTimeDate.getDate()); //out=>  8
console.log(myTimeDate.getDay()); //out=>  3
console.log(myTimeDate.getMonth()); //out=>  0  |  0 means january
console.log(myTimeDate.getFullYear()); //out=>  2003
console.log(myTimeDate.getMinutes()); //out=>  30




