import React from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";

const uniqueShelves = books => {
  const shelves = books.map(book => book.shelf);

  const reducer = (acc, curVal) => {
    if (acc.includes(curVal)) {
      return acc;
    } else {
      return acc.concat(curVal);
    }
  };

  return shelves.reduce(reducer, []);
};

const BookShelfList = ({ books, moveBook }) => {
  const shelves = uniqueShelves(books);

  const shelvesData = shelves.map(shelf => {
    const shelfBooks = books.filter(book => book.shelf === shelf);
    return { title: shelf, books: shelfBooks };
  });

  const shelfElements = shelvesData.map(shelfData =>
    <BookShelf key={shelfData.title} {...shelfData} moveBook={moveBook} />
  );

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfElements}
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </a>
      </div>
    </div>
  );
};

BookShelfList.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};
export default BookShelfList;
