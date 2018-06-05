import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <header className="header-comp">
        <h1>Find your Next Favorite Book!</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/books" render={() => <li>only on books....</li>}/>
          </ul>
        </nav>
      </header>
    );
  }
}