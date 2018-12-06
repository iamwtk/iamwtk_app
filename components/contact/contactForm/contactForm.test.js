import React from 'react'
import { shallow }  from 'enzyme'

import ContactForm from '../ContactForm'


//TODO: find way to dive into wrapped fields
describe('<ContactForm/>', () => {
    let component, onSubmitHandler
    beforeEach(() => {
        onSubmitHandler = jest.fn()
        component = shallow(<ContactForm onSubmitHandler={onSubmitHandler}/>) 
    })

    it('Should render without crashing', () => {
        expect(component).toHaveLength(1)
    })   
    
})