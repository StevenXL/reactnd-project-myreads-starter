import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";

class SearchPage extends React.Component {
  state = { books: [] };

  render() {
    const { books } = this.state;
    const { moveBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
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
