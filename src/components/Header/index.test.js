import React from 'react';
import { renderComponent , expect } from '../../../test/testSetup';
import Header from './'
import Menu from '../Menu';

import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<Header />);

describe('Header Component', () => {
  it('renders menu text', () => {
    expect(wrapper.find('span.menu-text').text()).equal('MENU');
  })

  it('renders logo div', () => {
    expect(wrapper.find('.logo-container').children().hasClass('logo')).to.equal(true);
  })

  it('renders burger menu', ()=>{
    expect(wrapper.contains(<Menu />)).to.equal(true);
  })
  
})