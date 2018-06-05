import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Books from './Books';


describe('Books', () => {
  it('renders with props', () => {
    const items = [
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
      },
      {
        kind: 'books#volume',
        id: '2qg1DwAAQBAJ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/2qg1DwAAQBAJ',
        volumeInfo: {
          title: 'Canine and Feline Geriatric Oncology',
          subtitle: 'Honoring the Human-Animal Bond',
          authors: [
            'Alice Villalobos'
          ],
          publishedDate: '2017-11-29',
          description: 'Canine and Feline Geriatric Oncology: Honoring the Human-Animal Bond, Second Edition provides a complete clinical approach to the most common neoplasias in geriatric dogs and cats. Provides the tools needed to diagnose and treat aging pets with cancer and to help clients make the best decisions for themselves and their animals Addresses the \'what-ifs\' that often arise during interactions with clients of aging pets with cancer and helps to determine when a pet should enter the hospice phase Features many vignettes and real-life case studies to demonstrate the issues faced by clinicians and owners dealing with older dogs and cats with cancer and end-of-life issues Fully updated and expanded with new and revised information, including new knowledge on palliative and hospice care and self-care techniques for carers',
          imageLinks: {
            thumbnail: 'http://books.google.com/books/content?id=2qg1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
        },
      }
    ];
    
    const wrapper = shallow(<Books items={items}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

  });
});

