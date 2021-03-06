import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchSite extends Component {
  state = {
    searchedBooks: [],
    query: ""
  };

  handleInput = e => {
    let searchQuery = e.target.value;
    this.setState({ query: searchQuery.trim() }, () => {
      if (this.state.query) {
        this.addBooks(this.state.query);
      } else {
        this.removeBooks();
      }
    });
  };

  addBooks = query => {
    BooksAPI.search(query)
      .then(books => {
        if (!books.error) {
          books.forEach(book => {
            let booksOnShelfs = this.props.books;
            for (let i = 0; i < booksOnShelfs.length; i++) {
              let searchBook;
              let shelfBook;
              if (book.id === booksOnShelfs[i].id) {
                searchBook = books.indexOf(book);
                shelfBook = booksOnShelfs[i];
                books.splice(searchBook, 1, shelfBook);
              }
            }
            return books;
          });
        } else {
          books = [];
        }

        return books;
      })
      .then(books => {
        this.setState({ searchedBooks: books });
      });

  };

  removeBooks = () => {
    this.setState({ searchedBooks: [] });
  }

  render() {
    const defaultShelf = "none";

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={process.env.PUBLIC_URL + "/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                key={book.id}
                currentBook={book}
                defaultShelf={defaultShelf}
                updateBooks={this.props.updateBooks}
                books={this.props.books}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchSite;
