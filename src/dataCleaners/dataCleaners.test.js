import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import { crawlCleaner, peopleCleaner, planetCleaner, vehicleCleaner } from './dataCleaners';
import { mockedCrawl, mockedPeople, mockedPlanets, mockedVehicles, mockedHomeworld, mockedSpecies, mockedPerson} from './mockedData'

describe('dataCleaners', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('crawlCleaner returns an array', () => {

    let cleanedData = crawlCleaner(mockedCrawl);

    expect(Object.keys(cleanedData)).toThrow();
    expect(cleanedData.length).toEqual(2);
  })

  it('crawlCleaner returns an array with text, title, year', () => {
    const expectedData = [{text: 'string', title: 'A New Hope', year: '1977-05-25'}, {text: 'string', title: 'Attack of the Clones', year: '2002-05-16'}]
    let cleanedData = crawlCleaner(mockedCrawl);

    expect(cleanedData).toEqual(expectedData);
  })

  it('peopleCleaner returns an object', () => {
    let cleanedData = peopleCleaner(mockedPeople);

    expect(typeof cleanedData).toEqual('object');
  })

  it('peopleDataCleaner returns an object with keys of persons name', () => {
    let cleanedData = peopleCleaner(mockedPeople)
    let expectedKeys = ['Luke Skywalker']

    expect(Object.keys(cleanedData)).toThrow();
    expect(Object.keys(cleanedData).length).toEqual(1);
    expect(Object.keys(cleanedData)).toEqual(expectedKeys)
  })

  it.skip('for each key, there is an object that returns name, homeworld, species, population', () => {
    fetchMock.get(person.homeworld, {status: 200, body: mockedHomeworld})
    fetchMock.get(person.homeworld, {status: 200, body: mockedHomeworld})
    fetchMock.get(person.species, {status: 200, body: mockedSpecies})


    let cleanedData = peopleCleaner(mockedPerson)
    let expected = {name: 'Luke Skywalker', homeworld: 'Tattooine', species: 'human', population: '200000'}

    expect(cleanedData).toEqual(expected)
  })
})
