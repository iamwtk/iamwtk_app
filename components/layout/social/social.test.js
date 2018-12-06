import React from 'react'
import { shallow } from 'enzyme'

import Social from '../Social.js'


describe('<Social/>', () => {
  let component
  beforeEach(() => {
    component = shallow( <Social/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  })

  it('Should render 4 <SocialIcon/>', () => {
    expect(component.find('SocialIcon')).toHaveLength(4)
  }) 
  
})