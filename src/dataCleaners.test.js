import React from 'react';
import { shallow, mount } from 'enzyme';
import { crawlCleaner } from './dataCleaners';
const mockedData = { results: [{title: 'A New Hope', opening_crawl: 'Its the 70s in space!', release_date: 1977, extra: ''}, {title: 'The Empire Strikes Back', opening_crawl: 'The one with just a ton of Yoda messing with Luke', release_date: 1980, extra: ''}, {title: 'Return of the Jedi', opening_crawl: 'At least the Ewoks are not as bad as Jar Jar Binks amiright', release_date: 1983, extra: ''}]};

const expectedData = [{title: 'A New Hope', text: 'Its the 70s in space!', year: 1977}, {title: 'The Empire Strikes Back', text: 'The one with just a ton of Yoda messing with Luke', year: 1980}, {title: 'Return of the Jedi', text: 'At least the Ewoks are not as bad as Jar Jar Binks amiright', year: 1983}];

describe('crawlCleaner', () => {
  it('returns an array', () => {
    let cleanedData = crawlCleaner(mockedData);

    expect(Object.keys(cleanedData)).toThrow();
    expect(cleanedData.length).toEqual(3);
  })

  it('returns an array with text, title, year', () => {
    let cleanedData = crawlCleaner(mockedData);

    expect(cleanedData).toEqual(expectedData);
  })
})
