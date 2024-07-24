// ================================== Feature Request: Number Printing Script ==================================  \\

// Using a for loop

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }



// Using a while loop

let num = 1;
    while (num <= 10) {
        console.log(num);
        num++;
    }



// ================================== Feature Request: Multiplication Table Script ==================================  \\

// Printing the multiplication table of 5 using a for loop

    for (let i = 1; i <= 10; i++) {
        let result = 5 * i;
        console.log(`5 * ${i} = ${result}`);
    }



// ================================== Feature Request: Pattern Printing Script ==================================  \\

// Define the number of rows for the pattern
    const rows = 5;

// Outer loop for each row
    for (let i = 1; i <= rows; i++) {
        let pattern = '';

        // Inner loop for each column in the current row
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }

        // Print the pattern for the current row
        console.log(pattern);
    }



    
// ================================== Feature Request: Sum Calculation Script ==================================  \\

// Initialize variables
    let num1 = 1;
    let sum = 0;

// While loop to calculate the sum of numbers from 1 to 10
    while (num1 <= 10) {
        sum += num1; // Add current value of num to sum
        num1++; // Increment num for the next iteration
    }

// Output the result
    console.log("The sum of numbers from 1 to 10 is:", sum);




    
// ================================== Feature Request: Factorial Calculation Script ==================================  \\

// Function to calculate factorial using a do...while loop
function calculateFactorial(number) {
    // Check if the number is negative
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let factorial = 1;
    let i = 1;

    // Do...while loop to calculate factorial
    do {
        factorial *= i;
        i++;
    } while (i <= number);

    return factorial;
}

// Example usage:
const num2 = 5;
const result = calculateFactorial(num2);

console.log(`The factorial of ${num2} is:`, result);
