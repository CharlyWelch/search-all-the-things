import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

export default class SearchForm extends Component {
  
  static propTypes = {
    subject: PropTypes.string,
    onSearch: PropTypes.func
  };

  state = {
    current: this.props.subject || ''
  };

  componentWillReceiveProps({ subject }) {
    if(subject !== this.state.current) {
      this.setState({ current: subject || '' });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ current: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.callSearch();
  };

  callSearch() {
    const { current } = this.state;
    if(!current) return;
    this.props.onSearch(current);
  }

  render() {

    const { current } = this.state;

    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
            Search for books by subject:
          <input 
            name="search" 
            placeholder="Subject"
            value={current} 
            onChange={this.handleChange}/>
        </label>
        <button>Find</button>
      </form>
    );
  }
}