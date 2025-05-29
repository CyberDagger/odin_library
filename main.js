const listTarget = document.querySelector("#list");
const buttonNewBook = document.querySelector("#btn-new");

const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author));
}

function listBooks(library) {
    let header = document.createElement("tr");
    let headElement;
    headElement = document.createElement("th");
    headElement.textContent = "ID";
    header.appendChild(headElement);
    headElement = document.createElement("th");
    headElement.textContent = "Title";
    header.appendChild(headElement);
    headElement = document.createElement("th");
    headElement.textContent = "Author";
    header.appendChild(headElement);
    listTarget.appendChild(header);
    for (let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");
        let rowElement;
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].id;
        row.appendChild(rowElement);
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].title;
        row.appendChild(rowElement);
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].author;
        row.appendChild(rowElement);
        listTarget.appendChild(row);
    }
}

addBookToLibrary("The Adventures of Sherlock Holmes", "Arthur Conan Doyle");
addBookToLibrary("Frankenstein", "Mary Shelley");
addBookToLibrary("Alice’s Adventures in Wonderland", "Lewis Carroll");
addBookToLibrary("The Adventures of Sherlock Holmes", "Arthur Conan Doyle");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien");

listBooks(myLibrary);