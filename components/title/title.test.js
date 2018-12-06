import React from 'react'
import { shallow } from 'enzyme'

import Title from '../Title.js'


describe('<Title/>', () => {
    let component
    beforeEach(() => {
        component = shallow(<Title text={'Text Title'} />)
    })
  it('Should render without crashing', () => {    

    expect(component).toHaveLength(1)

  }) 
  it('Should render text from props', () => {

    expect(component.contains('Text Title')).toBe(true)

  }) 
})