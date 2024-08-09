// ================================== Feature Request: Array Manipulation Script ==================================  \\

// Demonstrate creating an array, adding/removing elements using `push`, `pop`, `shift`, and `unshift`.

// Create an array with some initial elements
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Adding Elements:
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

fruits.push('elderberry', 'fig');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

// Using "unshift":
fruits.unshift('avocado');
console.log(fruits); // Output: ['avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

fruits.unshift('grapefruit', 'honeydew');
console.log(fruits); // Output: ['grapefruit', 'honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

// Removing Elements:
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'fig'
console.log(fruits); // Output: ['grapefruit', 'honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry']

// Using shift:
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'grapefruit'
console.log(fruits); // Output: ['honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry']

// Combining Methods:
fruits.push('grape');
console.log(fruits); // Output: ['honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry', 'grape']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry', 'grape']

fruits.pop();
console.log(fruits); // Output: ['kiwi', 'honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry']

fruits.shift();
console.log(fruits); // Output: ['honeydew', 'avocado', 'apple', 'banana', 'cherry', 'date', 'elderberry']





// ================================== Feature Request: Array Transformation Script ==================================  \\

// Use `map`, `filter`, and `reduce` methods to transform and aggregate array data.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 1: Double each number
const doubledNumbers = numbers.map(num => num * 2);

// Step 2: Filter out numbers less than 10
const filteredNumbers = doubledNumbers.filter(num => num >= 10);

// Step 3: Calculate the sum of the remaining numbers
const sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Doubled Numbers:', doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log('Filtered Numbers:', filteredNumbers); // [10, 12, 14, 16, 18, 20]
console.log('Sum of Filtered Numbers:', sum); // 90




// ================================== Feature Request: Array Iteration Script ==================================  \\

// Iterate over an array using both `for` loop and `forEach` method and log each element.

// Using a ""for Loop"
const array = [10, 20, 30, 40, 50];

console.log('Using for loop:');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Using "forEach" method
console.log('Using forEach method:');
array.forEach(element => {
    console.log(element);
});



// ================================== Feature Request: Two-dimensional Array Script ==================================  \\

// Demonstrate the creation and manipulation of a two-dimensional array.

// Create a 2D array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Initial matrix:');
console.log(matrix);

// Access an element
console.log('Value at matrix[1][2]:', matrix[1][2]);

// Modify an element
matrix[0][0] = 10;
console.log('Matrix after modification:');
console.log(matrix);

// Iterate using nested loops
console.log('Iterating over matrix:');
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
    }
}

// Iterate using forEach
console.log('Using forEach to iterate over matrix:');
matrix.forEach((row, i) => {
    row.forEach((element, j) => {
        console.log(`Element at [${i}][${j}]:`, element);
    });
});

// Add a row
matrix.push([10, 11, 12]);
console.log('Matrix after adding a new row:');
console.log(matrix);

// Add a column
matrix.forEach(row => row.push(13));
console.log('Matrix after adding a new column:');
console.log(matrix);

// Remove a row
matrix.pop();
console.log('Matrix after removing the last row:');
console.log(matrix);

// Remove a column
matrix.forEach(row => row.pop());
console.log('Matrix after removing the last column:');
console.log(matrix);
