import React from "react";
import Ramda from "ramda";
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
  const uniqueBooks = Ramda.uniqBy(book => book.id, books);

  const bookElements = uniqueBooks.map(book => {
    return (
      <Book
        key={`${book.id}-${book.title}`}
        {...book}
        moveBook={shelf => moveBook(book, shelf)}
      />
    );
  });

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
