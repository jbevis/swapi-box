import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import { crawlCleaner, peopleCleaner, planetCleaner, vehicleCleaner } from './dataCleaners';
import { mockedCrawl, mockedPeople, mockedPlanets, mockedVehicles, mockedHomeworld, mockedSpecies, mockedPerson} from './mockedData'

describe('movieCrawls cleaner', () => {
  const cleanedCrawls = crawlCleaner(mockedCrawl)

  it('crawlCleaner should be a function', () => {

    expect(typeof crawlCleaner).toBe('function');
  })

  it('crawlCleaner should return an array', () => {

    expect(typeof cleanedCrawls).toBe('object');
  })

  it('should have the correct number of film data in the array', () => {

    expect(cleanedCrawls.length).toBe(1)
    expect(cleanedCrawls[0].title).toBe('A New Hope')
  })
})

describe('people cleaner', () => {
  const cleanedPeople= peopleCleaner(mockedPeople)

  it('peopleCleaner should be a function', () => {

    expect(typeof peopleCleaner).toBe('function');
  })

  it('peopleCleaner should return an object', () => {

    expect(typeof cleanedPeople).toBe('object');
  })

  it('peopleCleaner returns an object with keys of persons name', () => {
    let cleanedData = peopleCleaner(mockedPeople)
    let expectedKeys = ['Luke Skywalker']

    expect(Object.keys(cleanedData).length).toEqual(1);
    expect(Object.keys(cleanedData)).toEqual(expectedKeys)
  })
})

describe('planets cleaner', () => {
  const cleanedPlanets= planetCleaner(mockedPlanets)

  it('planetCleaner should be a function', () => {

    expect(typeof planetCleaner).toBe('function');
  })

  it('planetCleaner should return an object', () => {

    expect(typeof cleanedPlanets).toBe('object');
  })

  it('planetCleaner returns an object with keys of planets names', () => {
    let expected = ['Alderaan']

    expect(Object.keys(cleanedPlanets).length).toEqual(1);
    expect(Object.keys(cleanedPlanets)).toEqual(expected)
  })
})

describe('vehicles cleaner', () => {
  const cleanedVehicles = vehicleCleaner(mockedVehicles)

  it('vehicleCleaner should be a function', () => {

    expect(typeof vehicleCleaner).toBe('function');
  })

  it('vehicleCleaner should return an object', () => {

    expect(typeof cleanedVehicles).toBe('object');
  })

  it('vehicleCleaner returns an object with keys of planets names', () => {
    let expected = ['Sand Crawler']

    expect(Object.keys(cleanedVehicles).length).toEqual(1);
    expect(Object.keys(cleanedVehicles)).toEqual(expected)
  })
})
