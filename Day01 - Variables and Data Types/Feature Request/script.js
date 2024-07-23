
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