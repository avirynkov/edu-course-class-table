export class Book {
    #isbn
    #date
    constructor(isbn, name, date, author) {
         this.#isbn = isbn;   //private this.isbn  = isbn;
         this.name = name;
         this.#date = date;
         this.author = author;
    }

    getIsbn() {
        return this.#isbn;
    }

    setIsbn(newIsbn) {
        this.#isbn = newIsbn;
        this.#date = this.#updateDate();
    }

    listBook() {
        return `[BOOK]: ${this.name}, ${this.author}`;
    }

    listFullBook() {
        return `
          [ISBN]: ${this.#isbn} \n
          [BOOK]: ${this.name} \n
          [AUTHOR]: ${this.author} \n
          [DATE]: ${this.#date} \n
        `
    }

    #updateDate() {
        return new Date().toISOString();
    }

    getName() {
        return this.name;
    }
};


export class FictionBook extends Book {
    #isbn
    #date
    constructor(isbn, name, date, author,color) {
        super(isbn, name, date, author);
        this.color = color;
        this.#isbn = isbn;
        this.#date = date;
    }

    getColor() {
        return `${this.name} : ${this.color}`;
    }

    // @override
    listFullBook() {
        return `
          [ISBN]: ${this.#isbn} \n
          [BOOK]: ${this.name} \n
          [AUTHOR]: ${this.author} \n
          [DATE]: ${this.#date} \n
          [COLOR]: ${this.color} \n
        `
    }
};



const book1 = new Book(1, 'Hello', new Date().toISOString(), 'Rynkov');
const book2 = new FictionBook(2, 'Hi', new Date().toISOString(), 'NeRynkov', 'red');   //instance






