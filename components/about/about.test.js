import React from 'react'
import { shallow } from 'enzyme'

import About from '../About.js'

describe('<About/>', () => {
  it('Should render without crashing', () => {

    const component = shallow(<About/>) 

    expect(component).toHaveLength(1)
  })
})