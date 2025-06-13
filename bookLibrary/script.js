const myLibrary = [];

function Book(title, author, pageNumber, readStatus) {
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the Book constructor.");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

const theHobbit = new Book("The Hobbit", "J.J.R Tolkien", "360 pages", "not read");
const power = new Book("Power: the 48 laws of power", "Robert Greene", "500", "read")
Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}


addBookToLibrary(theHobbit);
addBookToLibrary(power)

console.log(myLibrary);