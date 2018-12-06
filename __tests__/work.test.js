import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'

import Work from '../pages/work.js'

jest.mock('axios')
/**
 * TEST for root work page
 * for <Work/> component see test at /components/work/work.test.js
 */
describe('PAGE: work', () => {
  
  it('Renders without crash', () => {
    const component = shallow(<Work/>)

    expect(component).toHaveLength(1)
  }) 

  describe('getInitialProps', () => {
    it('Should return array of works from API', async () => {
        const res = { data: { work: [{ test: 'string' }] } }

        axios.get.mockResolvedValue(res)

        const works = await Work.getInitialProps()

        expect(works).toEqual({ workData: res.data.work })
    })

    it('Should return error if API call fails', async () => {
        const error = new Error('error')
        axios.get.mockImplementation(() => {
            throw error
        })

        const works = await Work.getInitialProps()

        expect(works).toEqual({ error: error })
    })
  })
  
})