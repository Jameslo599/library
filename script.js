// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB4WMy4-NheIwgYpHsm4tqCMBZBD3y7of0",
    authDomain: "library-fcf5c.firebaseapp.com",
    projectId: "library-fcf5c",
    storageBucket: "library-fcf5c.appspot.com",
    messagingSenderId: "718828069371",
    appId: "1:718828069371:web:efd83ed34f06a43288eb5e",
    measurementId: "G-436GMWQC49"
};
firebase.initializeApp(firebaseConfig);

//Array to hold book objects
let myLibrary = [];

//Object initializer with properties
class Book {
    constructor (author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

//Pushes user-inputted info to initialize and display new object
let form = document.getElementById("form");
let checkBox = document.getElementById("mainBox");
let readValue = 'unread';
let readBook = document.getElementById("switch");
readBook.onclick = function() {
    readValue = "read";
}


function submitForm(event) {
    event.preventDefault();
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    if (checkBox.checked == false) {
        readValue = "unread";
    } else if (checkBox.checked == true) {
        readValue = "read";
    }
    let read = readValue;
    let submission = new Book(author, title, pages, read);
    myLibrary.push(submission);
    //currentLibrary.push(submission);
    showBooks();
    //populateStorage();
    //firebaseUpdate();
}

//Displays objects in a nice compact info 'card'. 
//Also allows user to delete cards upon clicking the span element.
function showBooks() {
    for (let i = (0  + (myLibrary.length - 1)); i < myLibrary.length; i++) {
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
            //for (let i = 0; i < myLibrary.length; i++) {
            myLibrary.splice(i, 1);//}
            //populateStorage();
            //firebaseUpdate();
        }
      const myPara3 = document.createElement('p');
      const myLabel = document.createElement('label');
        myLabel.className = "switch";
        myLabel.id = "switch" + i;
        myLabel.onclick = function() {
            if (myInput.checked == true) {
                myLibrary[i].read = 'read'
            } else if (myInput.checked == false) {
                myLibrary[i].read = 'unread';
            }}
      const myInput = document.createElement("input");
        myInput.type = "checkbox";
        myInput.id = "check" + i;
        if (checkBox.checked == true) {
            myInput.checked = true
        } else if (checkBox.checked == false) {
            myInput.checked = false;
        }
      const mySpan = document.createElement('span');
        mySpan.className = "slider round"

      myH2.textContent = 'Author: ' + myLibrary[i].author;
      myPara1.textContent = 'Title: ' + myLibrary[i].title;
      myPara2.textContent = 'Pages: ' + myLibrary[i].pages;
      myPara3.textContent = 'Read?';
      
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myExit);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myLabel);
      myLabel.appendChild(myInput);
      myLabel.appendChild(mySpan);
      section.appendChild(myArticle);
  }
}
//Clears the form for a new consecutive submission
function resetForm(event) {
    event.preventDefault();
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  checkBox.checked = false;
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
        document.getElementById("author").value = "";
        document.getElementById("title").value = "";
        document.getElementById("pages").value = "";
        checkBox.checked = false;
    }
}
//if (!localStorage.getItem("currentLibrary")) {
//   populateStorage();
//    } else {
//    setStyles();
//    showStoredBooks();
//}
//
//function setStyles() {
//    myLibrary = JSON.parse(localStorage.getItem("currentLibrary"));
//}
//
//
//function populateStorage() {
//localStorage.setItem("currentLibrary", JSON.stringify(myLibrary));
//    setStyles();
//}
//
//function showStoredBooks() {
//    if (myLibrary.length == 0) {
//        return;
//    } else if (myLibrary.length >= 1) {
//    for (let i = 0; i < myLibrary.length; i++) {
//        let section = document.getElementById("bookHolder");
//      const myArticle = document.createElement('article');
//      myArticle.id = "book" + i;
//      myArticle.className = "book";
//      const myH2 = document.createElement('h2');
//      const myPara1 = document.createElement('p');
//      const myPara2 = document.createElement('p');
//      const myExit = document.createElement('i');
//        myExit.id = "exitButton";
//        myExit.className = 'fas fa-times fa-2x';
//        myExit.onclick = function () {
//            document.getElementById("book" + i).remove();
//            myLibrary.splice(i, 1);
//            populateStorage();
//        }
//      const myPara3 = document.createElement('p');
//      const myLabel = document.createElement('label');
//        myLabel.className = "switch";
//        myLabel.id = "switch" + i;
//        myLabel.onclick = function() {
//            if (myInput.checked == true) {
//                myLibrary[i].read = 'read'
//            } else if (myInput.checked == false) {
//                myLibrary[i].read = 'unread';
//            }}
//      const myInput = document.createElement("input");
//        myInput.type = "checkbox";
//        myInput.id = "check" + i;
//        if (checkBox.checked == true) {
//            myInput.checked = true
//        } else if (checkBox.checked == false) {
//            myInput.checked = false;
//        }
//      const mySpan = document.createElement('span');
//        mySpan.className = "slider round"
//
//      myH2.textContent = 'Author: ' + myLibrary[i].author;
//      myPara1.textContent = 'Title: ' + myLibrary[i].title;
//      myPara2.textContent = 'Pages: ' + myLibrary[i].pages;
//      myPara3.textContent = 'Read?';
//      
//      myArticle.appendChild(myH2);
//      myArticle.appendChild(myPara1);
//      myArticle.appendChild(myPara2);
//      myArticle.appendChild(myExit);
//      myArticle.appendChild(myPara3);
//      myArticle.appendChild(myLabel);
//      myLabel.appendChild(myInput);
//      myLabel.appendChild(mySpan);
//      section.appendChild(myArticle);
//  }
//}}
//

let firestore = firebase.firestore();

let docRef = firestore.collection("collection").doc('books');

let firebaseUpdate = function() {
    docRef.set({
        author: "james",
        title: "james",
        pages: "james",
        read: "james"
    });
};

form.addEventListener("click", firebaseUpdate);
window.onload = function() {
    docRef.get('books').then(function (doc) {
        if (doc && doc.exists) {
        }
    });
}


// Firestore data converter
var bookConverter = {
    toFirestore: function(book) {
        return {
            author: book.author,
            title: book.title,
            pages: book.pages,
            read: book.read,
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Book(data.author, data.title, data.pages, data.read);
    }
};

docRef.withConverter(bookConverter).get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      var book = doc.data();
      // Use a City instance method
      console.log(book.toString());
    } else {
      console.log("No such document!");
    }}).catch((error) => {
      console.log("Error getting document:", error);
    });