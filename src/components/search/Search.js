import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { search } from '../../services/booksApi';
import SearchForm from './SearchForm';
import Books from '../books/Books';
import Paging from '../paging/Paging';


export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func
  };

  state = {
    subject: '',
    loading: null,
    error: null,
    totalItems: 0,
    page: 1,
    startIndex: 0
  };

  searchBooks = () => {
    const { subject, startIndex } = this.state;

    this.setState({ 
      loading: true, 
      error: null
    });

    search(subject, startIndex)
      .then(
        ({ items, totalItems }) => {  
          this.setState({ items, totalItems, loading: false });
        }), 
    error => this.setState({ error })
      .then(
        this.setState({ loading: false })
      );
  };

  handleSearch = subject => {
    this.setState({
      error: null,
      subject,
      page: 1
    }, this.searchBooks);
  }

  handlePrev = () => this.handlePaging(-1, -10);
  handleNext = () => this.handlePaging(1, 10);

  handlePaging = (incr, indexChange) => {
    this.setState(prev => ({ 
      page: prev.page + incr, 
      startIndex: prev.startIndex + indexChange 
    }),
    this.searchBooks
    );
  };

  render() {

    const { subject, totalItems, items, loading, page } = this.state;
    
    return (
      <div>
        <SearchForm subject={subject} onSearch={this.handleSearch}/>
        <div>{loading && <img src="https://media.giphy.com/media/l0HlSF89is7bCAjte/giphy.gif"/>}</div>
        <div className="none">{(subject && totalItems === 0) && (<p>Found no books about {subject}.</p>)}</div> 
        {items && (
          <div>
            <h2 className="total">{totalItems} books about {subject}</h2>
            <div>
              <Paging totalItems={totalItems}
                page={page}
                onPrev={this.handlePrev}
                onNext={this.handleNext}/>
            </div>
            <Books items={items}/>
          </div>
        )}
      </div>
    );
  }
}
