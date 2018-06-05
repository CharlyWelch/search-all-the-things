import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class Books extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() { 
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, i) => {
          return <Book key={i} book={item}/>;
        })}
      </ul>
    );
  }
}