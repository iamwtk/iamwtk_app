import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Home.js'


describe('<Home/>', () => {
  let component
  beforeEach(() => {
    component = shallow( <Home/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  })

  it('Should render <Title/>', () => {
    expect(component.find('Title')).toHaveLength(1)
  })

  it('Should render <TypeWriter/>', () => {
    expect(component.find('TypeWriter')).toHaveLength(1)
  })
})