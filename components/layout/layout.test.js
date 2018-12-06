import React from 'react'
import { shallow } from 'enzyme'

import Layout from '../Layout.js'


describe('<Layout/>', () => {
    let component
    beforeEach(() => {
        component = shallow( <Layout children={<p>test node</p>}/> )
    })

    it('Should render without crashing', () => {
        expect(component).toHaveLength(1)
    })

    it('Should render children', () => {
        expect(component.find('p').text()).toBe('test node')
    })

    it('Should render <Header/>', () => {
        expect(component.find('Header')).toHaveLength(1)
    })

    it('Should render <SideNav/>', () => {
        expect(component.find('SideNav')).toHaveLength(1)
    })

    it('Should render <Social/>', () => {        
        expect(component.find('Social')).toHaveLength(1)
    })

})