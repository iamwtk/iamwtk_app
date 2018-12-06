import React from 'react'
import { shallow } from 'enzyme'

import TechFilter from '../TechFilter.js'


describe('<TechFilter/>', () => {
  it('Should render without crashing', () => {
    const component = shallow(<TechFilter/>) 

    expect(component).toHaveLength(1)
  })  
})