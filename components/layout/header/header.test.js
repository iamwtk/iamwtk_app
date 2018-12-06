import React from 'react'
import { shallow } from 'enzyme'



import Header from '../Header.js'


describe('<Header/>', () => {
    let component
    beforeEach(() => {
        component = shallow( <Header/> )
    })

    it('Should render without crashing', () => {
        expect(component).toHaveLength(1)
    })

    it('Should render <Logo/>', () => {
        expect(component.find('Logo')).toHaveLength(1)
    })   

})