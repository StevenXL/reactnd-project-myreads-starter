import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = { booksFromQuery: [] };

  handleInput = event => {
    const query = event.target.value;

    if (query !== "") {
      this.performQuery(query);
    } else {
      return null;
    }
  };

  moveBook = (book, shelf) => {
    this.props.moveBook(book, shelf);
  };

  syncQueryAndShelf = booksFromQuery => {
    const booksFromShelf = this.props.books;

    const shelfIds = booksFromShelf.map(book => book.id);

    const merged = booksFromQuery.map(queryBook => {
      if (shelfIds.includes(queryBook.id)) {
        return booksFromShelf.find(shelfBook => shelfBook.id === queryBook.id);
      } else {
        return queryBook;
      }
    });

    return merged;
  };

  performQuery = query => {
    BooksAPI.search(query).then(results => {
      if (!results.error && this.state.booksFromQuery !== results) {
        this.setState({ booksFromQuery: this.syncQueryAndShelf(results) });
      }
    });
  };

  render() {
    const { booksFromQuery } = this.state;
    const { handleInput, syncQueryAndShelf } = this;

    const booksToDisplay = syncQueryAndShelf(booksFromQuery);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksFromQuery.length > 0 &&
            <BookShelf
              title="Search Results"
              books={booksToDisplay}
              moveBook={this.moveBook}
            />}
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = { moveBook: PropTypes.func.isRequired };

export default SearchPage;
