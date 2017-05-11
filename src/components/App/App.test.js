import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from './App';
import { mockedCrawl, mockedPeople, mockedPlanets, mockedVehicles, mockedHomeworld, mockedSpecies, mockedPerson} from '../../dataCleaners/mockedData'

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')}, 3000)
})

describe.skip('App --> shallow mounts', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders loading message while waiting for api', () => {
    let wrapper = shallow(<App />);
    const found = wrapper.find('.loading-message')

    expect(found).toHaveLength(1)
  });
});

describe.skip('App --> mount',() => {

  beforeEach(() => {
    fetchMock.get('http://www.swapi.co/api/films', {
      status: 200,
      body: mockedCrawl,
      throws: 'rejected'
    }).catch('error')
    fetchMock.get('http://www.swapi.co/api/people', {
      status: 200,
      body: mockedPeople,
      throws: 'rejected'
    })
    fetchMock.get('http://www.swapi.co/api/planets', {
      status: 200,
      body: mockedPlanets,
      throws: 'rejected'
    })
    fetchMock.get('http://www.swapi.co/api/vehicles', {
      status: 200,
      body: mockedVehicles,
      throws: 'rejected'
    })
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200,
      body: mockedHomeworld,
      throws: 'rejected'
    })
    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockedSpecies,
      throws: 'rejected'
    })
    fetchMock.get('http://swapi.co/api/people/1/', {
      status: 200,
      body: mockedPerson,
      throws: 'rejected'
    })
  });

  afterEach(() => {
    fetchMock.restore()
    expect(fetchMock.calls().unmatched).toEqual([]);
  })

  it('after page load, renders app', async () => {
    const wrapper = mount(<App />)
    const found = wrapper.find(".App-header")

    await promise;
    // console.log(found)
    expect(found).toHaveLength(1)
  })


  // it('should display a randomly selected opening crawl', () => {
  //   expect(mountWrapper.find('.crawl').length).toEqual(1)
  // })
})
