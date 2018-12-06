import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.3'

configure({ adapter: new Adapter() })


/**
 * Fail test if prop type is failing
 */
const originalConsoleError = console.error;

console.error = message => {
    if (/(Failed prop type)/.test(message)) {
        throw new Error(message)
    }

    originalConsoleError(message)
}