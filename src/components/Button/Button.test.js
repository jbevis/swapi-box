import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Button } from './Button';

describe('button --> shallow tests', () => {
  let wrapperShallow;

  beforeEach(() => {
    wrapperShallow = shallow(<Button  />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('renders a button', () => {
    let found = wrapperShallow.find('button')

    expect(found).toHaveLength(1)
  })

  //we need to come back and write more tests

})
