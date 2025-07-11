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

addBook('Libro1', 'Autore1', 'Pag1', true);