import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

export default class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  
  render() {

    const { selfLink } = this.props.book;
    const { title, publishedDate, description } = this.props.book.volumeInfo;
    
    const thumbnail = (this.props.book.volumeInfo.imageLinks) ? this.props.book.volumeInfo.imageLinks.thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5ewfk-9xrAwUt2clcSPwklh4-lfK2qDvROMNcUsSy3VmKGI_';

    const authors = (this.props.book.volumeInfo.authors) ? this.props.book.volumeInfo.authors : ['No Authors Listed'];
    
    function handleAuthors(authors) {
      if(authors.length > 1){
        return authors.join(', ');
      } 
      else return authors;
    }

    return (
      <li>
        <a href={selfLink} target="_blank"> 
          <h2>{title} by {handleAuthors(authors)}</h2>
          <img src={thumbnail}/> 
          <p className="published"> Published {publishedDate} </p>
          <p>{description}</p> 
        </a>
      </li>
    );
  }
}