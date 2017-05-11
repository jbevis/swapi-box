import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import { Card } from './Card';

const mockedData = { name: 'Luke',
                     homeworld: 'Tatooine',
                     species: 'human',
                     population: '200000',
                     residents: ['Luke', 'Leia', 'Han']
                    }

const mockedFaves = {  Luke: { name: 'Luke',
                              homeworld: 'Tatooine',
                              species: 'human',
                              population: '200000' },
                    }

describe('Card --> Shallow mount tests', () => {
  let shallowWrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    shallowWrapper = shallow(<Card data={mockedData}
                                   faveClick={mockFn}
                                   key={1}
                                   id={1}
                                   favoritesData={mockedFaves}
                                   keyName='Luke'/>)
  })

  it('has a card className', () => {

    expect(shallowWrapper.find('.card')).toHaveLength(1)
  })

  it('has a button to favorite the card', () => {

    expect(shallowWrapper.find('.favorite').length).toBe(1)
  })

  it('renders correct data onto the card', () => {
    const cardInfo = shallowWrapper.find('.card-text');

    expect(cardInfo.length).toBe(5)
  })

  it('should render contents of the array in data', () => {

    expect(shallowWrapper.find('span').length).toBe(3)
  })

})
