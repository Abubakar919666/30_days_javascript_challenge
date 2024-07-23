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






// Task 06

const number = 4;
const checkEvenOdd = (number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`);
console.log(checkEvenOdd);



// Task 07

let leapYear = 2024
if ((leapYear % 4 === 0 && leapYear % 100 !== 0 )|| (leapYear % 400 === 0)  ) {
    console.log(`${leapYear} is a leap year.`);
} else {
    console.log(`${leapYear} is not a leap year.`);
}




// Feature Request:

// Number Check Script:

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Example usage
checkNumber(10);   
checkNumber(-5);   
checkNumber(0);    




// Voting Eligibility Script :
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(`At age ${age}, you are eligible to vote.`);
    } else {
        console.log(`At age ${age}, you are not eligible to vote.`);
    }
}

// Example usage
checkVotingEligibility(20);
checkVotingEligibility(16);




// Day of the Week Script:

function getDayName(dayNumber) {
    let dayName;

        switch (dayNumber) {
            case 1:
                dayName = 'Monday';
                break;
            case 2:
                dayName = 'Tuesday';
                break;
            case 3:
                dayName = 'Wednesday';
                break;
            case 4:
                dayName = 'Thursday';
                break;
            case 5:
                dayName = 'Friday';
                break;
            case 6:
                dayName = 'Saturday';
                break;
            case 7:
                dayName = 'Sunday';
                break;
            default:
                dayName = 'Invalid day number';
                break;
        }

    console.log(dayName);
}

// Example usage
    getDayName(1);
    getDayName(4);
    getDayName(7); 
    getDayName(8); 




// Grade Assignment Script:

    function assignGrade(score) {
        let grade;

            switch (true) {
                case (score >= 90 && score <= 100):
                    grade = 'A';
                    break;
                case (score >= 80 && score < 90):
                    grade = 'B';
                    break;
                case (score >= 70 && score < 80):
                    grade = 'C';
                    break;
                case (score >= 60 && score < 70):
                    grade = 'D';
                    break;
                case (score >= 0 && score < 60):
                    grade = 'F';
                    break;
                default:
                    grade = 'Invalid score';
                    break;
            }

        console.log(`The grade for a score of ${score} is ${grade}`);
    }

// Example usage
    assignGrade(95); 
    assignGrade(85); 
    assignGrade(75); 
    assignGrade(65); 





// Leap Year Check Script:

    function checkLeapYear(year) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year.`);
        } else if (year % 100 === 0) {
            console.log(`${year} is not a leap year.`);
        } else if (year % 4 === 0) {
            console.log(`${year} is a leap year.`);
        } else {
            console.log(`${year} is not a leap year.`);
        }
    }

    // Example usage
    checkLeapYear(2020);  
    checkLeapYear(1900);  
    checkLeapYear(2000);  
    checkLeapYear(2023);  
