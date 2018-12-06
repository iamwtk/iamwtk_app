import React from 'react'
import { shallow } from 'enzyme'
import NavToggle from '../NavToggle'
import setMockAppContext, { defaultContext } from '../../../../testUtils/setMockAppContext'

beforeEach(() => {
  jest.resetModules()
}) 

describe('<NavToggle/>', () => { 
  it('Should render without crash', () => { 
    const component = shallow(<NavToggle/>)
    expect(component).toHaveLength(1)        
  })
  it('Should receive props from context', () => {
    setMockAppContext()
    const NavToggle = require('../NavToggle').default
    const component = shallow(<NavToggle/>)
    expect(component.dive().props().navOpen).toBe(false)
    expect(component.dive().props().toggleNav).toBe(defaultContext.toggleNav)
  })
  it('Should have active class if context.navOpen is true', () => {
    setMockAppContext({...defaultContext, navOpen: true})
    const NavToggle = require('../NavToggle').default
    const component = shallow(<NavToggle/>)
    expect(component.dive().dive().hasClass('active')).toBe(true)    
  })
   it('Should call context.toggleNav on click', () => {
    setMockAppContext()
    const NavToggle = require('../NavToggle').default
    const component = shallow(<NavToggle/>)
    component.dive().dive().simulate('click')
    expect(defaultContext.toggleNav).toHaveBeenCalled() 
  })
})
