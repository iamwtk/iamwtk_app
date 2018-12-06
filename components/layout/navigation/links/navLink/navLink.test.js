import React from 'react'
import { shallow } from 'enzyme'
import setMockAppContext, { defaultContext } from '../../../../../testUtils/setMockAppContext'

beforeEach(() => {
    jest.resetModules()
})

describe('<NavLink/>', () => { 
  let NavLink, component
  beforeEach(() => {
      setMockAppContext()
      NavLink = require('../NavLink').default
      component = shallow(<NavLink to='/' children={<p>test link</p>}/>)
  })

  it('Should render without crash', () => {  
    expect(component.dive()).toHaveLength(1)        
  })

  it('Should receive props from context', () => {
    expect(component.dive().props().path).toBe(defaultContext.path)
    expect(component.dive().props().closeNav).toBe(defaultContext.closeNav)
  })

  it('Should have active class if props.path and props.to is equal', () => {
    expect(component.dive().dive().find('a').hasClass('active')).toBe(true)    
  })

  it('Should not have active class if props.path and props.to are different', () => {
    component.setProps({to: '/differentPath'})   
    expect(component.dive().dive().find('a').hasClass('active')).toBe(false)    
  })

  it('Should have custom activeClass if passed as prop', () => { 
    component.setProps({activeClass: 'customClass'}) 
    expect(component.dive().dive().find('a').hasClass('customClass')).toBe(true)    
  })
   it('Should call closeNav on click', () => {
    component.dive().dive().find('a').simulate('click')
    expect(defaultContext.closeNav).toBeCalled()    
  })
 
 
})
