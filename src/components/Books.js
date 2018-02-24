import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class Books extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() { 
    const { books } = this.props;

    return (
      <ul>
        {books.map((book, i) => {
          <Book key={i} book={book}/>;
        })}
      </ul>
    );
  }
}