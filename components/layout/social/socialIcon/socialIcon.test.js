import React from 'react'
import { shallow } from 'enzyme'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import SocialIcon from '../SocialIcon.js'


describe('<SocialIcon/>', () => {
  let component
  beforeEach(() => {    
    component = shallow( <SocialIcon url='/icon' icon={faTwitter}/> )
  })

  it('Should render without crashing', () => {
    expect(component).toHaveLength(1)
  })

  it('Should render <FontAwesomeIcon/>', () => {
    expect(component.find('FontAwesomeIcon')).toHaveLength(1)
  }) 
  
})