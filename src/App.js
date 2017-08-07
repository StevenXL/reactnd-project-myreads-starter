import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import BookShelfList from "./BookShelfList";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = { books: [] };

  updateBookInShelf = book => {
    const newState = this.state.books.map(
      shelfBook => (shelfBook.id === book.id ? book : shelfBook)
    );

    this.setState({ books: newState });
  };

  addBookToShelf = book => {
    const newState = this.state.books.concat(book);

    this.setState({ books: newState });
  };

  bookInBookShelf = book => {
    return this.state.books.find(shelfBook => shelfBook.id === book.id);
  };

  moveBook = (book, shelf) => {
    const newBook = Object.assign({}, book, { shelf });

    if (this.bookInBookShelf(newBook)) {
      this.updateBookInShelf(newBook);
    } else {
      this.addBookToShelf(newBook);
    }

    // optimistic updating; we update UI before updating server
    BooksAPI.update(newBook, shelf);
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  render() {
    const { books } = this.state;
    const moveBook = this.moveBook;
    const booksForDisplay = books.filter(book => book.shelf !== "none");

    return (
      <div className="app">
        <Route
          path="/search"
          render={() =>
            <SearchPage books={booksForDisplay} moveBook={moveBook} />}
        />
        <Route
          exact
          path="/"
          render={() =>
            <BookShelfList books={booksForDisplay} moveBook={moveBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
