let myLibrary = [];

function Book(title) {
    //title = prompt("Please enter book title", "");
    this.title = title;
    //this.author = author
}

function addBookToLibrary() {
    let input = new Book(prompt(""));
    myLibrary.push(input);
    return input;
}

Book.prototype = Object.create(addBookToLibrary.prototype);