import React from 'react'
import PropTypes from 'prop-types'
import { AppContext } from './AppContext.js'

/**
 * HOC with Context Consumer
 * @param {Component} Component 
 */
const withAppContext = (Component) => (props) => (
    <AppContext.Consumer>
        {state => <Component {...props} {...state}/>}
    </AppContext.Consumer>
) 
withAppContext.propTypes = {
    Component: PropTypes.element.isRequired
}
export default withAppContext
