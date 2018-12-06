import React from 'react'
import { shallow } from 'enzyme'

import About from '../pages/about.js'

/**
 * TEST for root about page
 * for <About/> component see test at /components/about/about.test.js
 */
describe('PAGE: about', () => {
  it('Should render without crashing', () => {
    const component = shallow(<About/>)

    expect(component).toHaveLength(1)
  }) 
})