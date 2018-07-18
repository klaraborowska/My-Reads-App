import React from "react";
import Book from "./Book";

const BookShelf = props => {
  const books = props.books;
  const currentShelf = props.currentShelf;
  const sortedBooks = books.filter(book => currentShelf === book.shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {sortedBooks.map(book => (
            <Book
              key={book.id}
              currentBook={book}
              updateBooks={props.updateBooks}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
