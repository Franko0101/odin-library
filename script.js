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
    true
);

addBook(
    '1984',
    'George Orwell',
    320,
    false
)

function displayBooks() {
    for(const book of library) {
        let bookStatus = "";
        if(book.read) 
            bookStatus = "Letto"
        else 
            bookStatus = "Non Letto";

        const main = document.querySelector(".main");
        const card = document.createElement("div");
        card.classList.add("card");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerHTML = "&#10060";
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
        readStatusBtn.textContent = bookStatus;
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
    if(sidebar.getAttribute("hidden") == null)
        sidebar.setAttribute("hidden", "hidden");
    else
        sidebar.removeAttribute("hidden");
});

displayBooks();