// Task 01

const book = {
    title : "Startup Nation",
    author : "Dan Senor and Saul Singer",
    year : 2009,
    language_english : true,
}
console.log(book);



// Task 02

// Access the property
    console.log(book.author);
    console.log(`Title = ${book.title} and Author = ${book.author}`);



// Task 03



    book.book_details = function () {
            return (`title :${this.title} by this author ${this.author} `)
        } 
    console.log(book.book_details);




// Task 04


    book.year = function (updateYear) {
            book.year = updateYear;
        } 

    book.year(2010)
    console.log(book.year);




