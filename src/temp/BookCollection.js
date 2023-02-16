import { Book, FictionBook } from './bookDescription.js';

export class BookCollection {
    constructor() {
        this.collection = [];
    }

    addBook(isbn, name, date, author) {
        const book = new Book(isbn, name, date, author);
        this.collection.push(book);
    }

    removeBook(isbn) {
        function filterCollection(item) {
            const currentIsbn = item.getIsbn(); 
            return currentIsbn !== isbn;
        }
        this.collecton = this.collection.filter(filterCollection);
    }

    getBookNames() {
        function getNames(item) {
            return item.getName();
        }

        return this.collection.map(getNames);
    }

    getBook(name) {
        function findName(item) {
            const itemName = item.getName();
            return itemName === name;
        }

        return this.collection.find(findName);
    }
}