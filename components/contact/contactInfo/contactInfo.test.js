import React from 'react'
import { shallow } from 'enzyme'

import ContactInfo from '../ContactInfo.js'

describe('<ContactInfo/>', () => {
  it('Should render without crashing', () => {

    const component = shallow(<ContactInfo/>) 

    expect(component).toHaveLength(1)
  })
})