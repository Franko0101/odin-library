const library = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
}

addBook(
    'Harry potter e la Camera dei Segreti', 
    'J.K. Rowling', 
    244, 
    "Letto"
);

addBook(
    '1984',
    'George Orwell',
    320,
    "Non Letto"
)

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

Book.prototype.toggleReadStatus = function() {
    if(this.read === "Non Letto")
        this.read = "Letto";
    else
        this.read = "Non Letto"
}

function displayBooks() {
    const main = document.querySelector(".main");
    removeAllChild(main);

    for(let book of library) {
        const card = document.createElement("div");
        card.classList.add("card");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerHTML = "&#10060";
    
        removeBtn.addEventListener("click", function (e) {
            const index = library.findIndex(item => item.id == book.id)
            library.splice(index, 1);
            displayBooks();
        });

        const cardText = document.createElement("div");
        cardText.classList.add("card-text");
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;
        const bookPages = document.createElement("p");
        bookPages.textContent = book.pages + " Pagine";
        const readStatusBtn = document.createElement("button");
        readStatusBtn.classList.add("read-status-btn");
        readStatusBtn.textContent = book.read;

        readStatusBtn.addEventListener("click", () => {
            book.toggleReadStatus();
            displayBooks();
        });

        card.appendChild(removeBtn);
        cardText.appendChild(bookTitle);
        cardText.appendChild(bookAuthor);
        card.appendChild(cardText);
        card.appendChild(bookPages);
        card.appendChild(readStatusBtn);
        main.appendChild(card);
    }
}

const addBookBtn = document.querySelector(".add-book-btn");
const sidebar = document.querySelector(".sidebar");

addBookBtn.addEventListener("click", () => {
    if(sidebar.getAttribute("hidden") == null) {
        sidebar.setAttribute("hidden", "hidden");
        addBookBtn.textContent = "Add Book"
    }
    else {
        sidebar.removeAttribute("hidden"); 
        addBookBtn.textContent = "Close"     
    }
});

const formData = document.querySelector("form");

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
    addBook(data.title, data.author, data.pages, data.status);
    displayBooks();
})



displayBooks();