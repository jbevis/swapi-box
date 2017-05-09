import React from 'react';
import { shallow, mount } from 'enzyme';
import { crawlCleaner } from './dataCleaners';
const mockedData = { results: [{title: 'A New Hope', opening_crawl: 'Its the 70s in space!', release_date: 1977, extra: ''}, {title: 'The Empire Strikes Back', opening_crawl: 'The one with just a ton of Yoda messing with Luke', release_date: 1980, extra: ''}, {title: 'Return of the Jedi', opening_crawl: 'At least the Ewoks are not as bad as Jar Jar Binks amiright', release_date: 1983, extra: ''}]};

describe('dataCleaners', () => {
  it('crawlCleaner returns an array', () => {

    const expectedData = [{title: 'A New Hope', text: 'Its the 70s in space!', year: 1977}, {title: 'The Empire Strikes Back', text: 'The one with just a ton of Yoda messing with Luke', year: 1980}, {title: 'Return of the Jedi', text: 'At least the Ewoks are not as bad as Jar Jar Binks amiright', year: 1983}];
    let cleanedData = crawlCleaner(mockedData);

    expect(Object.keys(cleanedData)).toThrow();
    expect(cleanedData.length).toEqual(3);
  })

  it('crawlCleaner returns an array with text, title, year', () => {
    const expectedData = [{title: 'A New Hope', text: 'Its the 70s in space!', year: 1977}, {title: 'The Empire Strikes Back', text: 'The one with just a ton of Yoda messing with Luke', year: 1980}, {title: 'Return of the Jedi', text: 'At least the Ewoks are not as bad as Jar Jar Binks amiright', year: 1983}];
    let cleanedData = crawlCleaner(mockedData);

    expect(cleanedData).toEqual(expectedData);
  })

  it.skip('findPlanetName', () => {

    expect(name).toEqual('Tattooine');
  })

  it.skip('findSpecies', () => {

    expect(name).toEqual('Tattooine');
  })

  it.skip('peopleDataCleaner returns an array', () => {
    let cleanedData = peopleDataCLeaner(mockedData);

    expect(Object.keys(cleanedData)).toThrow();
    expect(cleanedData.length).toEqual(3);
  })

  it.skip('peopleDataCleaner returns an array with name, homeworld, species, homeworldPop', () => {
    const expectedData = [];
    let cleanedData = peopleDataCleaner(mockedData);

    expect(cleanedData).toEqual(expectedData);
  })
})
