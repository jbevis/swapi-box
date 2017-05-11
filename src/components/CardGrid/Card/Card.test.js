import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import { Card } from './Card';

const mockedData = {  Luke: { name: 'Luke',
                              homeworld: 'Tatooine',
                              species: 'human',
                              population: '200000' },
                    }

describe('Card --> Shallow mount tests', () => {
  let shallowWrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    shallowWrapper = shallow(<Card data={mockedData} faveClick={mockFn}/>)
  })

  it('has a card className', () => {

    expect(wrapperShallow.find('.card').toHaveLength(1)
  })

  it('has a button to favorite the card', () => {

    expect(wrapperShallow.find('.markFavorite').toHaveLength(1)
  })

  it('renders correct data onto the card', () => {
    const name = wrapperShallow.find()
  })

})
