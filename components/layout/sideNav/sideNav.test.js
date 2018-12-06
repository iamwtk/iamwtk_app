import React from 'react'
import { shallow } from 'enzyme'


import SideNav from '../SideNav.js'


describe('<SideNav/>', () => {
  let component
  beforeEach(() => {    
    component = shallow( <SideNav/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  })

  it('Should render <Links/>', () => {
    expect(component.find('Links')).toHaveLength(1)
  }) 
  
})