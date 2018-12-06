import React, { Component } from 'react'

import { withRouter } from 'next/router'


/**
 * Create React context
 */
export const AppContext = React.createContext()



/**
 * Context provider wrapper
 */
class AppProvider extends Component {
    state = {
        navOpen: false
    }
    toggleNav = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }
    closeNav = () => {
        this.setState({
            navOpen: false
        })
    }
    render() {
        const appState = {
            toggleNav: this.toggleNav,
            closeNav: this.closeNav,
            path: this.props.router.pathname,
            navOpen: this.state.navOpen 
        }
        return (
            <AppContext.Provider value={appState}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default withRouter(AppProvider)




