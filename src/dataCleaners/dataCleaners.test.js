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
    expect(cleanedData.length).toEqual(1);
  })

  it('crawlCleaner returns an array with text, title, year', () => {
    const expectedData = [{text: 'string', title: 'A New Hope', year: '1977-05-25'}]
    let cleanedData = crawlCleaner(mockedCrawl);

    expect(cleanedData).toEqual(expectedData);
  })

  it('peopleCleaner returns an object', () => {
    let cleanedData = peopleCleaner(mockedPeople);

    expect(typeof cleanedData).toEqual('object');
  })

  it('peopleCleaner returns an object with keys of persons name', () => {
    let cleanedData = peopleCleaner(mockedPeople)
    let expectedKeys = ['Luke Skywalker']

    expect(Object.keys(cleanedData)).toThrow();
    expect(Object.keys(cleanedData).length).toEqual(1);
    expect(Object.keys(cleanedData)).toEqual(expectedKeys)
  })

  it.skip('peopleCleaner: for each key, there is an object that returns name, homeworld, species, population', () => {
    fetchMock.get('http://swapi.co/api/planets/1/', {status: 200, body: mockedHomeworld}).catch('error')
    fetchMock.get('http://swapi.co/api/planets/1/', {status: 200, body: mockedHomeworld}).catch('error')
    fetchMock.get('http://swapi.co/api/species/1/', {status: 200, body: mockedSpecies}).catch('error')


    let cleanedData = peopleCleaner(mockedPerson)
    let expected = ['name', 'homeworld', 'species', 'population']

    expect(Object.keys(cleanedData['Luke Skywalker'])).toEqual(expected)
  })

  it.skip('planetCleaner: for each key, there is an object that returns name, terrain, population, and residents', () => {
    fetchMock.get('http://swapi.co/people/1/', {status: 200, body: mockedPerson}).catch('error')

    let cleanedData = planetCleaner(mockedPlanets);
    let received = Object.keys(cleanedData['Alderaan']);
    let expected = ['name', 'terrain', 'population', 'residents'];

    expect(received).toEqual(expected)
  })

  it('vehicleCleaner: for each key, there is an object that returns name, model, class, and passengers', () => {
    let cleanedData = vehicleCleaner(mockedVehicles);
    let expected = {'Sand Crawler': {name: 'Sand Crawler', model:'Digger Crawler', class:'wheeled', passengers:'30'}}

    expect(cleanedData).toEqual(expected);
  })
})
