import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const titleForDisplay = title => {
  switch (title) {
    case "currentlyReading":
      return "Currently Reading";
    case "wantToRead":
      return "Want to Read";
    case "read":
      return "Read";
    case "none":
      return "None";
    default:
      return title;
  }
};

const BookShelf = ({ title, books, moveBook }) => {
  const bookElements = books.map(book =>
    <Book key={book.id} {...book} moveBook={moveBook} />
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {titleForDisplay(title)}
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
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default BookShelf;
