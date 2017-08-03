import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookShelf = ({ title, books }) => {
  const bookElements = books.map(book => <Book key={book.id} {...book} />);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookElements}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
