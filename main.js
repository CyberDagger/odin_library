const listTarget = document.querySelector("#list");
const buttonNewBook = document.querySelector("#btn-new");
const buttonSubmit = document.querySelector("#btn-submit-book");
const buttonClose = document.querySelector("#btn-close-form");
const submitForm = document.querySelector("#submit-form");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");

const myLibrary = [];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(library, title, author) {
    library.push(new Book(title, author));
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
    headElement = document.createElement("th");
    headElement.textContent = "Delete";
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
        rowElement = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        rowElement.appendChild(delBtn);
        row.appendChild(rowElement);
        listTarget.appendChild(row);
    }
}

buttonNewBook.addEventListener("click", () => {
    submitForm.showModal();
})

buttonClose.addEventListener("click", () => {
    submitForm.close();
})

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm.close();
    addBookToLibrary(myLibrary, inputTitle.value, inputAuthor.value);
    while (listTarget.firstChild) {
        listTarget.removeChild(listTarget.lastChild);
    }
    listBooks(myLibrary);
    inputTitle.value = "";
    inputAuthor.value = "";
})

addBookToLibrary(myLibrary, "The Adventures of Sherlock Holmes", "Arthur Conan Doyle");
addBookToLibrary(myLibrary, "Frankenstein", "Mary Shelley");
addBookToLibrary(myLibrary, "Alice’s Adventures in Wonderland", "Lewis Carroll");
addBookToLibrary(myLibrary, "The Adventures of Sherlock Holmes", "Arthur Conan Doyle");
addBookToLibrary(myLibrary, "The Hobbit", "J.R.R. Tolkien");

listBooks(myLibrary);