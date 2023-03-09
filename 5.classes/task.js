class PrintEditionItem {
    constructor(name, releaseDate, pagesCount ){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state = this.state*1.5;
        if(this.state >= 100){
            this.state = 100;
        }
    }
    set state(quality){
        if(quality < 0){
        this._state = 0;
        }else if(quality > 100){
            this._state = 100
        }else{
            this._state = quality;
        }
}
    get state(){
        return this._state;

    }
}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount ){
        super(name, releaseDate, pagesCount );
        this.type = "magazine";
    }
}


class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount ){
        super(name, releaseDate, pagesCount );
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount ){
        super(name, releaseDate, pagesCount );
        this.type = "novel";
        this.author = author;
    }
    }

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount ){
        super(name, releaseDate, pagesCount );
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount ){
        super(name, releaseDate, pagesCount );
        this.type = "detective";
        this.author = author;
    }
}

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type,value){
    let filterBook = this.books.find((book) => book[type]===value);
    if(!filterBook){
      return null
    }
    return filterBook;
}
    giveBookByName(bookName){
        const index = this.books.findIndex((book) => book.name === bookName);
        if(index >= 0){
            let book = this.books[index];
            this.books = this.books.filter((book) => book.name !== bookName);
          return book;
        }
        return null;
}
}