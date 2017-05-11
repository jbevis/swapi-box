import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Button } from './Button';

describe('button --> shallow tests', () => {
  let wrapperShallow;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapperShallow = shallow(<Button name='button' onClick={mockFn} counter={5}/>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('renders a button', () => {
    let found = wrapperShallow.find('button')

    expect(found).toHaveLength(1)
  })

  it('when clicked the mock function fires', () => {

    wrapperShallow.find('.button').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should display a counter', ()=> {

    expect(wrapperShallow.find('.counter')).toHaveLength(1)
  })
})
