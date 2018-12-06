import React from 'react'
import { shallow } from 'enzyme'
import setMockAppContext, { defaultContext } from '../../../testUtils/setMockAppContext'

beforeEach(() => {
    jest.resetModules()
})

describe('<Navigation/>', () => { 
  let Navigation, component
  beforeEach(() => {
      setMockAppContext({navOpen: true})
      Navigation = require('../Navigation').default
      component = shallow(<Navigation/>)
  })

  it('Should render without crash', () => {  
    expect(component.dive()).toHaveLength(1)        
  })

  it('Should receive props from context', () => {
    expect(component.dive().props().navOpen).toBe(!defaultContext.navOpen)    
  }) 

  it('Should show enable CSSTransition in prop via navOpen', () => {  
    expect(component.dive().dive().props().in).toBe(true)
  })
 
})
