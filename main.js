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
    this.read = false;

    this.toggleRead = function() {
        this.read = !this.read;
    }
}

function addBookToLibrary(library, title, author) {
    library.push(new Book(title, author));
}

function listBooks(library) {
    while (listTarget.firstChild) {
        listTarget.removeChild(listTarget.lastChild);
    }
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
    headElement.textContent = "Read";
    header.appendChild(headElement);
    headElement = document.createElement("th");
    headElement.textContent = "Delete";
    header.appendChild(headElement);
    listTarget.appendChild(header);
    for (let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");
        let rowElement;
        // ID
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].id;
        row.appendChild(rowElement);
        // Title
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].title;
        row.appendChild(rowElement);
        // Author
        rowElement = document.createElement("td");
        rowElement.textContent = library[i].author;
        row.appendChild(rowElement);
        // Read
        rowElement = document.createElement("td");
        let readChk = document.createElement("input");
        readChk.setAttribute("type", "checkbox");
        readChk.setAttribute("data-id", library[i].id);
        if (library[i].read) {
            readChk.setAttribute("checked", "checked");
        }
        readChk.addEventListener("click", () => {
            const index = library.map(i => i.id).indexOf(library[i].id);
            library[i].toggleRead();
            listBooks(library);
        })
        rowElement.appendChild(readChk);
        row.appendChild(rowElement);
        // Delete
        rowElement = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("delete");
        delBtn.setAttribute("data-id", library[i].id);
        delBtn.addEventListener("click", () => {
            const index = library.map(i => i.id).indexOf(library[i].id);
            library.splice(index, 1);
            listBooks(library);
        })
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