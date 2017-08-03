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

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={BookShelfList} />
      </div>
    );
  }
}

export default BooksApp;
