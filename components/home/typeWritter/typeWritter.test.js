import React from 'react'
import { shallow } from 'enzyme'

import TypeWriter from '../TypeWriter.js'


describe('<TypeWriter/>', () => {
  let component
  beforeEach(() => {
    component = shallow( <TypeWriter/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  })

  it('Should render <Typing/>', () => {
    expect(component.find('Typing')).toHaveLength(1)
  })
 
})