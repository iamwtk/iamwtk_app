import React from 'react'
import { shallow }  from 'enzyme'

import withAppContext from '../withAppContext.js'
// import setMockAppContext, {defaultContext} from '../../testUtils/setMockAppContext'



beforeEach(() => {    
    jest.resetModules()
})



describe('withAppContext()', () => {  
   

    it('Should render without crashing', () => {       
        const Component = <div>Component</div>
        const WrappedComponent = withAppContext(Component)
        const component = shallow(<WrappedComponent/>)
        expect(component).toHaveLength(1)
    })

    //TODO: add test for correct passing of props by consumer to wrapped element
    
})