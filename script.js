let myLibrary = [];
function updateBooks() {
for (let i = 0; i < myLibrary.length; i++) {
    const updatedBooks = myLibrary[i];
    let json = JSON.stringify(updatedBooks);
    document.getElementById("bookContainer").innerHTML = json;
}}

function Book(title) {
    this.title = title;
}

function addBookToLibrary() {
    let input = new Book(prompt(""));
    myLibrary.push(input);
    let json = JSON.stringify(myLibrary);
    document.getElementById("bookContainer").innerHTML = json;
    return input;
}

let modal = document.getElementById("modalContainer");
let button = document.getElementById("newBook");
let span = document.getElementsByClassName("close")[0];
button.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

Book.prototype = Object.create(addBookToLibrary.prototype);