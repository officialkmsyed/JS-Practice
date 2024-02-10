//JSON API intro and Objects Destructure

const course ={
    name: "Chai aur JavaScript",
    courseInstructor: "Hitesh Choudhary",
    coursePrice: "999$",
    studentsEnroll: ["Khishamuddin", "Syed"]
}

course.coursePrice; //We also write this but this mehtod is headache

const {courseInstructor: instructor} = course //By this mehtod i deSructure the object, even i use this without allocating othe refrenc name jus like
console.log(instructor);

const {courseInstructor} = course 
console.log(courseInstructor); //i also used this 

console.log(courseInstructor === instructor); //out=> true

console.log(course.studentsEnroll[0]); //to access array element 

// Tips: Jab Bhi {} Dekho React me ya kahi per to smajho deStrucuring Ki Ja rahi hai

//JSON next videos