import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import BookShelf from "./BookShelf";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={BookShelf} />
      </div>
    );
  }
}

export default BooksApp;
