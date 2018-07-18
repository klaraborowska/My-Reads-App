import React from "react";
import ButtonChange from "./ButtonChange";

const Book = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.currentBook.imageLinks ? props.currentBook.imageLinks.thumbnail : ""})`
            }}
          />
          <ButtonChange
            currentBook={props.currentBook}
            updateBooks={props.updateBooks}
            defaultShelf={props.defaultShelf}
            books={props.books}
          />
        </div>
        <div className="book-title">{props.currentBook.title}</div>
        <div className="book-authors">{props.currentBook.authors ? props.currentBook.authors : ""}</div>
      </div>
    </li>
  );
};
export default Book;
