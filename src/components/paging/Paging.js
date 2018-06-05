import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    totalItems: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    // startIndex: PropTypes.number.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
  };

  render() {
    const { totalItems, page, onPrev, onNext } = this.props;
    const totalPages = Math.ceil(totalItems / 10);

    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        <button onClick={onPrev} disabled={page === 1}>Prev</button>
        <button onClick={onNext} disabled={page === totalPages}>Next</button>
      </div>
    );
  }

}