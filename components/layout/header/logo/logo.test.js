import React from 'react'
import { shallow } from 'enzyme'


import Logo from '../Logo.js'


describe('<Logo/>', () => {
  let component
  beforeEach(() => {    
    component = shallow( <Logo/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  }) 
  
})