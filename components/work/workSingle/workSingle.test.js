import React from 'react'
import { shallow } from 'enzyme'

import WorkSingle from '../WorkSingle.js'


describe('<WorkSingle/>', () => {
  it('Should render without crashing', () => {
    const component = shallow(<WorkSingle img='/blah.jpg' url='http://example.com' title='Test' />) 

    expect(component).toHaveLength(1)
  })  
})