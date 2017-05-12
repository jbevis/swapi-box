import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from './App';
import { mockedCrawl, mockedPeople, mockedPlanets, mockedVehicles, mockedHomeworld, mockedSpecies, mockedPerson} from '../../dataCleaners/mockedData'


describe('App --> shallow mounts', () => {

  beforeEach(() => {
    fetchMock.get('http://www.swapi.co/api/films', {
      status: 200,
      body: mockedCrawl
    }).catch('error')

    fetchMock.get('http://www.swapi.co/api/people', {
      status: 200,
      body: mockedPeople
    })

    fetchMock.get('http://www.swapi.co/api/planets', {
      status: 200,
      body: mockedPlanets
    })

    fetchMock.get('http://www.swapi.co/api/vehicles', {
      status: 200,
      body: mockedVehicles
    })

    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200,
      body: mockedHomeworld
    })

    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockedSpecies
    })

    fetchMock.get('http://swapi.co/api/people/1/', {
      status: 200,
      body: mockedPerson
    })
  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

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

describe('App --> mount',() => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  beforeEach(() => {
    fetchMock.get('http://www.swapi.co/api/films', {
      status: 200,
      body: mockedCrawl
    }).catch('error')

    fetchMock.get('http://www.swapi.co/api/people', {
      status: 200,
      body: mockedPeople
    })

    fetchMock.get('http://www.swapi.co/api/planets', {
      status: 200,
      body: mockedPlanets
    })

    fetchMock.get('http://www.swapi.co/api/vehicles', {
      status: 200,
      body: mockedVehicles
    })

    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200,
      body: mockedHomeworld
    })

    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockedSpecies
    })

    fetchMock.get('http://swapi.co/api/people/1/', {
      status: 200,
      body: mockedPerson
    })
  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('after page load, renders app', async () => {

    const wrapper = mount(<App />)

    await resolveAfter2Seconds();

    expect(Object.keys(wrapper.state()).length)
    expect(wrapper.find('.App-header').length).toBe(1);
  })

  it('after page load, renders all 4 Button components', async () => {

    const wrapper = mount(<App />)

    await resolveAfter2Seconds();

    expect(wrapper.find('button').length).toBe(4);
  })
})
