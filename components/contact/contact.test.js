import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../Contact'
import axios from 'axios';

jest.mock('axios')

describe('<Contact/>', () => { 
  let component
  beforeEach(() => {
    component = shallow( <Contact/> )
  })

  it('Should render without crash', () => {
    expect(component).toHaveLength(1)        
  })

  it('Should render <Title/>', () => {
    expect(component.find('Title')).toHaveLength(1)        
  })

  describe('`onFormSubmitHandler()`', () => {      
    const fields = {field: '1', input: '5'}
    let instance   
     
    beforeEach(() => {
        instance = component.instance()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should post form data if `isValid` is true', async () => {

        await instance.onFormSubmitHandler({ fields, isValid: true })

        expect(axios.post).toBeCalledWith('/api/mailer/contact-form', fields)

    })
    it('Should shouldnt post data if `isValid` is false', async () => {

        await instance.onFormSubmitHandler({ fields, isValid: false })

        expect(axios.post).toBeCalledTimes(0)

    })
    it('Should set `state.success` to message from response ', async () => {
        const success = 'success'

        axios.post.mockResolvedValue({ data: { message: success } })        

        await instance.onFormSubmitHandler({ fields, isValid: true })

        expect(component.state('success')).toEqual(success)

    })
    it.skip('Should set `state.error` to error.StatusText from error object ', async () => {
        const error = 'error'

        //TODO: throw correct error structure as from axios
        axios.post.mockImplementation(() => {
            throw new Error('error')
        })

        await instance.onFormSubmitHandler({ fields, isValid: true })

        expect(component.state('error')).toEqual(error)

    })
    it('Should set `state.error` to default message if error.statusText is undefined ', async () => {
        const error = 'Server Error'

        axios.post.mockImplementation(() => {
            throw new Error()
        })

        await instance.onFormSubmitHandler({ fields, isValid: true })

        expect(component.state('error')).toEqual(error)

    })

  })
})
