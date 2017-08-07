import React from "react";
import PropTypes from "prop-types";

const Book = ({ title, authors, imageLinks, moveBook, shelf, id }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={event => moveBook(event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-authors">
          {authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

Book.defaultProps = {
  authors: [],
  shelf: ""
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }).isRequired,
  moveBook: PropTypes.func.isRequired,
  shelf: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Book;
