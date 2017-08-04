import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = { books: [] };

  handleInput = event => {
    const query = event.target.value;

    if (query !== "") {
      this.performQuery(query);
    } else {
      return null;
    }
  };

  performQuery = query => {
    BooksAPI.search(query).then(books => this.setState({ books: books }));
  };

  render() {
    const { books } = this.state;
    const handleInput = this.handleInput;
    const { moveBook } = this.props;

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
          {books.length > 0 &&
            <BookShelf
              title="Search Results"
              books={books}
              moveBook={moveBook}
            />}
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = { moveBook: PropTypes.func.isRequired };

export default SearchPage;
