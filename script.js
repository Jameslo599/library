//Array to hold book objects
let myLibrary = [];

//Object initializer with properties
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

//Pushes user-inputted info to initialize and display new object
let form = document.getElementById("form");
function submitForm(event) {
    event.preventDefault();
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let submission = new Book(author, title, pages);
    myLibrary.push(submission);
    showBooks();
}

//Displays objects in a nice compact info 'card'. 
//Also allows user to delete cards upon clicking the span element.
function showBooks() {
    for (let i = (0 + (myLibrary.length - 1)); i < myLibrary.length; i++) {
        let section = document.getElementById("bookHolder");
      const myArticle = document.createElement('article');
      myArticle.id = "book" + i;
      myArticle.className = "book";
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myExit = document.createElement('i');
      myExit.id = "exitButton";
      myExit.className = 'fas fa-times fa-2x';
      myExit.onclick = function () {
          document.getElementById("book" + i).remove();
          myLibrary.splice(i, 1);
      }
      //const myPara3 = document.createElement('p');
  
      myH2.textContent = 'Author: ' + myLibrary[i].author;
      myPara1.textContent = 'Title: ' + myLibrary[i].title;
      myPara2.textContent = 'Pages: ' + myLibrary[i].pages;
      
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myExit);
      //myArticle.appendChild(myPara3);

      section.appendChild(myArticle);
  }
}

//Clears the form for a new consecutive submission
function resetForm(event) {
    event.preventDefault();
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
}

form.addEventListener('submit', submitForm);
form.addEventListener('submit', resetForm);

//Modal popup activated with "Add New Book" button and
//deactivated when clicking on span element or outside of modal
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