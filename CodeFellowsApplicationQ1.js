function Library(name) {
     this.name = name;
     this.shelves = new Array();
}

function Shelf(shelfName) {
    this.books = new Array();
    this.shelfName = shelfName;
}

function Book(title, author, shelfNumber) {
    this.title = title;
    this.author = author;
    this.shelfNumber = shelfNumber;
    this.enshelf = function (title2, author2, shelfNumber2) {
        // This method can be called on any shelf and book placement in the library; what matters is the new shelf number you pass to it, and the length and fullness of that shelf's array.
        this.shelfNumber2 = shelfNumber2;
        this.author2 = author2;
        this.title2 = title2;
        library.shelves[shelfNumber2].books.push(new Book(title2,author2,shelfNumber2));
    }; 
    this.unshelf = function (bookName) {
        // This method can be called on any shelf and book placement in the library: all that matters is the name you pass as an argument (b/c that's what the search is based on).
        this.bookName = bookName;
        console.log("Book to unshelf: " + bookName);
        for (i = 0; i < library.shelves.length; i++) {
            for (j = 0; j < library.shelves[i].books.length; j++) {
                        
                if (library.shelves[i].books[j].title === bookName) {
                    console.log("Found it!");
                    console.log(library.shelves[i].books[j]);
                    delete library.shelves[i].books[j];
                    console.log(library.shelves[i].books[j]);
                }
            }
        }
    }
}

var library = new Library(library);
library.shelves.push(new Shelf(3, "HP"));
library.shelves.push(new Shelf(2, "Sherlock Holmes"));
library.shelves.push(new Shelf(1, "Pirates!"));

library.shelves[0].books.push(new Book("Harry Potter 1", "J.K.", 0));
library.shelves[0].books.push(new Book("Harry Potter 2", "J.K.", 0));
library.shelves[0].books.push(new Book("Harry Potter 3", "J.K.", 0));
library.shelves[1].books.push(new Book("SH & the Valley of Fear", "S.A.C.D", 1));
library.shelves[1].books.push(new Book("SH & the Sign of the Four", "S.A.C.D", 1));
library.shelves[2].books.push(new Book("Treasure Island", "R.L.S.", 2));

// Example of the Book class's 'enshelf' method
library.shelves[0].books[0].enshelf("Harry Potter 4", "J.K.", 0);
//console.log(library.shelves[0].books[3].title);

// Example of the Book class's 'unshelf' method
library.shelves[0].books[1].unshelf('Harry Potter 3');
//console.log(library.shelves[0]);

// The library's method to report all of the books that it contains
Library.prototype.reportAll = function() {
    console.log(this.shelves.length);
    for (i = 0; i < this.shelves.length; i++) {
        console.log("Shelf " + (i + 1) + " Title: " + this.shelves[i].shelfName);
        for (j = 0; j < this.shelves[i].books.length; j++) {
            console.log(this.shelves[i].books[j]); 
        }
    }
}
//library.reportAll();
console.log('');