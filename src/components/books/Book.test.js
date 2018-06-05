import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Book from './Book';


describe('Book', () => {
  it('renders with props', () => {
    
    const item = 
      {
        kind: 'books#volume',
        id: 'UWy3AQAACAAJ',
        etag: 'mWuxVpRF0Hw',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/UWy3AQAACAAJ',
        volumeInfo: {
          title: 'Coming to the Fire',
          subtitle: 'Exploring Our Shared History with Dogs, Cats, Cows, and Horses',
          authors: [
            'Gavin Ehringer'
          ],
          publishedDate: '2017-12-05',
          description: 'A thought-provoking and surprising book that explores the ever-evolving relationship between humans and domesticated animals.',
        },
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=UWy3AQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
      };

    const wrapper = shallow(<Book book={item}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

  });
});