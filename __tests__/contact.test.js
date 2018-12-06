import React from 'react'
import { shallow } from 'enzyme'

import Contact from '../pages/contact.js'

/**
 * TEST for root about page
 * for <Contact/> component see test at /components/contact/contact.test.js
 */
describe('PAGE: contact', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Contact/>)

    expect(component).toHaveLength(1)
  }) 
})