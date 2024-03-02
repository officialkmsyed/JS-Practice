// Maths Liabrary Learning

console.log(Math); //Math Object

console.log(Math.abs(-3)); // out=> 3  Abs mean Absolute value, yanai jo bhi negative value rahegi usko positive value me convert kardega ye

console.log(Math.round(4.5)); // out=> 4  Yeh round krdeta hai value ko if vlaue less than .5 then lower and if value is gretaer than .5 then value is upper round figure

console.log(Math.ceil(4.7)); //out => 5   ye upper value ko round krta hai

console.log(Math.floor(4.7)); //out => 4 ye lower value ko round kardega

console.log(Math.pow(6, 3)); // out=> 216 ye power ke liye use hota hai just like, 6*6*6= (6*6)6 =36*6=216

console.log(Math.sqrt(36, 2)); //out => 6  Square Root calculated as define

console.log(Math.max(4, 4, 7, 8, 3)); //out => 8 Biggest no in the string

console.log(Math.min(3, 5, 7, 1, 7)); //out => 1 lower no in the string

//---------------------------------------------------------------------------------------------------------

// Very Important Concepts

// It is useful for making games like Dice thrown to calculate random Number

console.log(Math.random()); //out => 0.48469414219895746  //very important! always value under 0 - 1 (Returns a pseudorandom number between 0 and 1)

// TO make random function more useful so make some mathematical changes like Math.random()*10 see the example
console.log(Math.random() * 10); //out => 5.170277848937919 | output is 0.517...... so it multiply this nowith 10 so output is 5.17............

// If random value is 0 then multiply with 10 does not work so we use +1 so value is not in come as 0, see example
console.log(Math.random() * 10 + 1); //out=> 1.068214681676133 | we use brackets as BODMAS Rule

// Then we want round figure value so for that we use
console.log(Math.round(Math.random() * 10 + 1));
