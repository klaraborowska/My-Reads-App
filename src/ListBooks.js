import React from "react";
import BookShelf from "./BookShelf";

const ListBooks = props => {
  const shelfs = [
    {
      title: "Currently Reading",
      status: "currentlyReading"
    },
    {
      title: "Read",
      status: "read"
    },
    {
      title: "Want To Read",
      status: "wantToRead"
    }
  ];

  return (
    <div className="list-books-content">
      <div>
        {shelfs.map(shelf => (
          <BookShelf
            books={props.books}
            currentShelf={shelf.status}
            title={shelf.title}
            key={shelf.title}
            updateBooks={props.updateBooks}
          />
        ))}
      </div>
    </div>
  );
};

export default ListBooks;
