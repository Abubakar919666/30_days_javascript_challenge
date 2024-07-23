// ================================== Feature Request: Number Check Script ==================================  \\

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



// ================================== Feature Request:  Voting Eligibility Script ==================================  \\
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



// ================================== Feature Request:  Day of the Week Script ==================================  \\

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



// ================================== Feature Request:  Grade Assignment Script ==================================  \\

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




// ================================== Feature Request: Leap Year Check Script ==================================  \\


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
