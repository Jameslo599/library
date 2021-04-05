Library Created as part of The Odin Project curriculum.

Live page (https://jameslo599.github.io/library/)

Functionality

Library uses a form via the "Add New Book" button to generate "Book" objects that are added to the array "myLibrary". The objects are then looped through and populated on the screen in in the form of info cards to display various information about the entry. 

The user is allowed to store the objects in two methods: local storage or cloud storage via Firebase. If user decides to use cloud storage, a Google account is required as each account generates a unique ID number which will be used to retrieve information from the database. 

Users are able to sign out of their account via sign out button.

Users are also able to clear both local and cloud saved data through their respective buttons.

This project is a demonstration of my ability to utilize objects to store information for an application. Overall, I thought this project was challenging mainly due to the fact that I wanted to implement features that I have not previously worked with. 

My first hurdle was figuring out how to create info cards to display my objects in. I had to spend some time contemplating before I understood that I needed to use a for loop to generate a unique ID in each iteration to be able to remove or edit specific books. I ended up using DOM methods inside the loop to generate header and paragraph elements to form a nice info card while also attaching a unique ID to each one.

The second hurdle came when I was first starting to implement Firebase as my cloud database. It turns out that Firebase doesn't accept custom objects so it took me a while to figure out a way to convert my custom objects into generic objects. I ended up using "Object.assign({}, myLibrary.map((obj) => {return Object.assign({}, obj)})));" in order to convert all of my objects at once instead of trying to loop through the array. 

Finally, my third big challenge was figuring out Firebase authentication to allow each user to have their own document in the cloud. Much time was spent on learning Google sign-in authentication and finding a way to retrive each user's unique auth.uid and creating a document using that ID. 

All in all, programming this application definitely strengthened my ability to utilize CSS, DOM methods, objects and objects constructors while also teaching me new techniques such as localStorage and Firebase. I am sure Firebase will be especially useful in future projects as a back-end, and am glad that I spent the time to learn this now as it should make developing future apps much easier.

-- James Lo