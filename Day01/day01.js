//================================== Activity 1 ==================================

//  Task 01

var num = 24;
console.log(num); 

// Task 02

let str = "Abubakar";
console.log(str); 


//================================== Activity 2 ==================================

//  Task 03

const isVerified = true;
console.log(isVerified);


//================================== Activity 3 ==================================

//  Task 04

let str1 = "Admission are open!";
console.log(`str1: ${str1}, type: ${typeof str1}`);
let  userId = 1111;
console.log(`userId: ${userId}, type: ${typeof userId}`);
const class_5_Done =  true;
console.log(`class_5_Done: ${class_5_Done}, type: ${typeof class_5_Done}`);
let students = []
console.log(`students: ${students}, type: ${typeof students}`);
const carName = {
    name:"Bughati",
    model:"500",
    color:"white"
};
console.log(`carName: ${carName}, type: ${typeof carName}`);


//================================== Activity 4 ==================================

//  Task 05

let car = "A black Vigo";
console.log(`car: ${car}, type: ${typeof car}`);
car = "A white Vigo";
console.log(`car: ${car}, type: ${typeof car}`);


//================================== Activity 5 ==================================

//  Task 06 

const Id = 119;
console.log('Id (initial):' , Id);
// Id = 120;
// console.log('Id (initial):' , Id); // Uncomment the following line to view the error. TypeError: Assignment to constant variable.





// ================================== Feature Request: Variable Types Console Log ==================================  

//   Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
 

var age = 10;
let str2 = "Hello";
const isUpdated = true;
let stdId;
let sign = null;
let stdInfo = { class: "nine" };
let stdName = [1, 2, 3];

console.log(`age: ${age}, type: ${typeof age}`);
console.log(`str2: ${str2}, type: ${typeof str2}`);
console.log(`isUpdated: ${isUpdated}, type: ${typeof isUpdated}`);
console.log(`stdId: ${stdId}, type: ${typeof stdId}`);
console.log(`sign: ${sign}, type: ${typeof sign}`);
console.log(`stdInfo: ${stdInfo}, type: ${typeof stdInfo}`);
console.log(`stdName: ${stdName}, type: ${typeof stdName}`);




// ================================== Feature Request: Reassignment Demo ==================================  
  
//    Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
 


let userName = "Muhammad";
console.log('userName (initial):', userName);

userName = "Abubakar";
console.log('userName (reassigned):', userName);


const userName1 = "Ali";
console.log('userName1:', userName1); 
// userName1 = "raza";
// console.log("userName1:" , userName1); // Uncomment the following line to view the error. TypeError: Assignment to constant variable.