import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import App from './App';


describe('App --> shallow mounts', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders App inside of main tags ', () => {
    const found = shallowWrapper.find('main')

    expect(found.length).toEqual(1)
  });

  it('renders a header', () => {
    expect(shallowWrapper.find('header').length).toEqual(1)
  });

  // it('renders with state consisting of five keys', () => {
  //   console.log(shallowWrapper.node)
  //   const keys = Object.keys()
  // })
});

describe('App --> mount', () => {
  let mountWrapper;

  beforeEach(() => {
    mountWrapper = mount(<App />)
  });

  it('should display a randomly selected opening crawl', () => {
    expect(mountWrapper.find('.crawl').length).toEqual(1)
  })
})
