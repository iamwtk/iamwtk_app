export const defaultContext = { navOpen: false, toggleNav: jest.fn(), closeNav: jest.fn(), path: '/' } 
 
const setMockAppContext = (context = defaultContext) => {
    return jest.doMock('../context/AppContext', () => ({
        AppContext: {
            Consumer: (props) => props.children(context)
        }
    }))  
}
export default setMockAppContext