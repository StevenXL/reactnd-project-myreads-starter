import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import BookShelfList from "./BookShelfList";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  moveBook(bookId, shelf) {
    const newBookState = this.state.books.map(book => {
      if (book.id === bookId) {
        return Object.assign({}, book, { shelf });
      } else {
        return book;
      }
    });

    this.setState({ books: newBookState });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" component={SearchPage} />
        <Route
          exact
          path="/"
          render={() =>
            <BookShelfList books={books} moveBook={this.moveBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
