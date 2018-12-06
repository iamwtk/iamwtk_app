import React from 'react'
import { shallow } from 'enzyme'

import Work from '../Work.js'


describe('<Work/>', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Work/>)

    expect(component).toHaveLength(1)
  })  
  it('Should render correct number of <WorkSingle/> from workData prop', () => {
      const workData = [{
          image: '1',
          url: '1',
          title: '1'
      }, {
          image: '2',
          url: '2',
          title: '2'
      }, {
          image: '3',
          url: '3',
          title: '3'
      }]      
      const component = shallow(<Work workData={workData}/>)
      expect(component.find('WorkSingle')).toHaveLength(3)
        
  })
  it('Should render <TechFilter/>', () => {
        const component = shallow(<Work/>)
        expect(component.find('TechFilter')).toHaveLength(1)
    
  })
  it('Should render <Title/>', () => {
        const component = shallow(<Work/>)
        expect(component.find('Title')).toHaveLength(1)
    
  })
})