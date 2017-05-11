import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Scroller } from './Scroller';

const mockData = [ {text: 'Welcome to swapi-box',
                   title: 'title',
                   year: '2017'
                   }
                 ];

describe('Sroller --> Shallow tests', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Scroller crawlText={mockData}/>)
  });

  it('renders the article with className crawl to the DOM', () => {

    expect(shallowWrapper.find('.crawl').length).toBe(1)
  });

  it('renders the correct data', () => {
    let found = shallowWrapper.find('.scroller-title')

    expect(shallowWrapper.find('p').length).toBe(3);
    expect(found.text()).toBe('title')
  })
})
