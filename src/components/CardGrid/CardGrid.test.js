import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { CardGrid } from './CardGrid';

const mockedData = {  Luke: { name: 'Luke',
                              homeworld: 'Tatooine',
                              species: 'human',
                              population: '200000' },
                      Vader: { name: 'Darth Vader',
                               homeworld: 'Tatooine',
                               species: 'human',
                               population: '200000' }
                    }

const mockFn = jest.fn()

describe('CardGrid --> Shallow mount tests', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<CardGrid data={mockedData} favorites={mockedData} faveClick={mockFn}/>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CardGrid />, div)
  })

  it('renders the card grid to the DOM', () => {
    const found = shallowWrapper.find('.card-grid');

    expect(found).toHaveLength(1)
  })
})

describe('CardGrid --> Mount tests', () => {

  it('renders appropriate number of cards, based on data in props', () => {
    const wrapper = mount(<CardGrid data={mockedData} favorites={mockedData} faveClick={mockFn} />)
    const found = wrapper.find('.card')

    expect(found.length).toBe(2)
  })
})

const { func, object } = React.PropTypes
CardGrid.propTypes = {
  data: object.isRequired,
  faveClick: func.isRequired,
  favorites: object.isRequired
}
