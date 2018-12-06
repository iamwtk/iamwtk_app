import React from 'react'
import { shallow } from 'enzyme'

import Index from '../pages/index.js'

describe('PAGE: index', () => {
  it('Renders without crash', () => {
    const component = shallow(<Index/>)

    expect(component).toHaveLength(1)
  }) 
})