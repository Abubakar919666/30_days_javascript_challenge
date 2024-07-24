// Loop

// Task 01

    for (let i = 1; i <= 10; i++) {
        const element = i;
            console.log(element);
    }





// Task 02

    for (let i = 5; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + '*' + j + ' = ' + i*j );
        }

    }






// Task 03

// sum += i; adds the current value of i to sum. This is shorthand for sum = sum + i;.
// i++; increments the value of i by 1. This is shorthand for i = i + 1;.
// Step-by-Step Execution:
// Initial values: sum = 0, i = 1
// First iteration: i = 1
// sum += i -> sum = 0 + 1 -> sum = 1
// i++ -> i = 2
// Second iteration: i = 2
// sum += i -> sum = 1 + 2 -> sum = 3
// i++ -> i = 3
// Third iteration: i = 3
// sum += i -> sum = 3 + 3 -> sum = 6
// i++ -> i = 4
// And so on...
// The loop continues this process until i exceeds 10.
// Final iteration: i = 10
// sum += i -> sum = 45 + 10 -> sum = 55
// i++ -> i = 11

let sum = 0;
let i = 1;

    while (i <= 10) {
        sum += i;
        i = i + 1; // i++
    }
    console.log(`Sum: ${sum}, ${i}`);






// Task 04 

    let index = 10
    while (index > 1) {
        console.log(index);
        index --;
    }
    console.log(index);







// Task 05

    let num = 1
    do {
        console.log(num);
        num++;
    } while (num <= 5);








// Task 06 very difficult

// 10! = 1*2*3*4*5*6*7*8*9*10

let factorial = 1;
let number = 1;

    do {
        factorial = factorial * number
        number++;
    } while (10 >= number);

    console.log(`Factorial of 10 is ${factorial}`);





// // Task 07
 
for (let i = 1; i <= 5; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = '* ' + row
    }
    console.log(row);
};





// Task 08

    for (let index = 1; index <= 10; index++){
        if (index == 5 ) {
            continue;
        }
        console.log(index);
    
    }





    
// Task 09

    for (let index = 1; index <= 10; index++){
        if (index == 6 ) {
            break;
        }
        console.log(`Value of index ${index}`);
    
    }
