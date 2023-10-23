class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    }

    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            return true;
        }
        return false;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.availableBooks = [];
        this.checkedOutBooks = [];
    }

    addBook(book) {
        this.books.push(book);
        this.availableBooks.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            if (book.isAvailable) {
                const availIndex = this.availableBooks.indexOf(book);
                this.availableBooks.splice(availIndex, 1);
            } else {
                const checkedOutIndex = this.checkedOutBooks.indexOf(book);
                this.checkedOutBooks.splice(checkedOutIndex, 1);
            }
        }
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title === title);
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    checkOutBook(book) {
        if (book.checkOut()) {
            const index = this.availableBooks.indexOf(book);
            this.availableBooks.splice(index, 1);
            this.checkedOutBooks.push(book);
            return true;
        }
        return false;
    }

    returnBook(book) {
        if (book.returnBook()) {
            const index = this.checkedOutBooks.indexOf(book);
            this.checkedOutBooks.splice(index, 1);
            this.availableBooks.push(book);
            return true;
        }
        return false;
    }
}

class Patron {
    constructor(name, libraryCardNumber) {
        this.name = name;
        this.libraryCardNumber = libraryCardNumber;
        this.checkedOutBooks = [];
    }

    checkOutBook(book) {
        if (book.isAvailable) {
            const success = book.checkOut();
            if (success) {
                this.checkedOutBooks.push(book);
                return true;
            }
        }
        return false;
    }

    returnBook(book) {
        const index = this.checkedOutBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.checkedOutBooks.splice(index, 1);
            return true;
        }
        return false;
    }

    listCheckedOutBooks() {
        return this.checkedOutBooks;
    }
}

var b1 = new Book("mca", "vaibhav", 101);
var p = new Patron("Vaibhav", 101);
var l = new Library();
l.addBook("math")
l.addBook("hindi")
l.addBook("English")

console.log(b1);
console.log(b1.checkOut());
console.log(b1.returnBook())
console.log(p);
console.log(l);