// Task 1

let num1 = 19;
if (num1 > 0) {
    console.log(`${num1} is a positive number `);
} else if (num1 < 0){
    console.log(`${num1} is a negative number `);
} else {
    console.log(`${num1} is a egual to zero`);
}



//  Task 02

let age = 20 ;
if (age >= 18) {
    console.log("You are eligible to given the vote ");
} else {
    console.log("You are not eligible to given the vote");
}



// Task 03

let num2 = 10;
let num3 = 20;
let num4 = 15;


if (num2 >= num3) { 
    if (num2 >= num4) { 
        console.log(`${num2} is the largest number.`);
    } else { 
        console.log(`${num4} is the largest number.`);
    }
} else { 
    if (num3 >= num4) {
        console.log(`${num3} is the largest number.`);
    } else { 
        console.log(`${num4} is the largest number.`);
    }
}




// Task 04

    let day = 3;
    switch (day) {
        case 1:
            console.log("Monday");        
            break;
        
        case 2:
            console.log("Tuesday");        
            break;
        case 3:
            console.log("Wednesday");  
            break;
        case 4:
            console.log("Thursday");  
            break;
        case 5:
            console.log("Friday");  
            break;
        case 6:
            console.log("Saturday");  
            break;
        case 7:
            console.log("Sunday");  
                break;
        default:
            console.log("Wrong day number. Please enter a number between 1 and 7.");
            break;
    }




// Task 05


let totalMarks = 60;
switch (true) {
    case totalMarks >= 90:
        console.log("Grade: A");        
        break;
    case totalMarks >= 80:
        console.log("Grade: B");        
        break;
    case totalMarks >= 70:
        console.log("Grade: C" );        
        break;
    case totalMarks >= 60:
        console.log("Grade: D" );        
        break;
    default:
        console.log("Grade F");
}