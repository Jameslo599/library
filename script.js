let myLibrary = [];
function updateBooks() {
for (let i = 0; i < myLibrary.length; i++) {
    const updatedBooks = myLibrary[i];
    let json = JSON.stringify(updatedBooks);
    document.getElementById("bookContainer").innerHTML = json;
}}

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
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
let form = document.getElementById("form");

function submitForm(event) {
    event.preventDefault();
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let submission = new Book(author, title, pages);
    myLibrary.push(submission);
    showHeroes();
}

function resetForm(event) {
    event.preventDefault();
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
}

form.addEventListener('submit', submitForm);
form.addEventListener('submit', resetForm);

function showHeroes() {
    for (let i = (0 + (myLibrary.length - 1)); i < myLibrary.length; i++) {
        let section = document.getElementById("bookHolder");
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      //const myPara3 = document.createElement('p');
  
      myH2.textContent = myLibrary[i].author;
      myPara1.textContent = 'Secret identity: ' + myLibrary[i].title;
      myPara2.textContent = 'Age: ' + myLibrary[i].pages;
      //myPara3.textContent = 'Superpowers:';

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        //myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
  }
}