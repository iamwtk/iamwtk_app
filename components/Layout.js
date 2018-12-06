import React from 'react'
import PropTypes from 'prop-types'

import AppProvider from '../context/AppContext'

import Header from './layout/Header'
import Navigation from './layout/Navigation'
import Social from './layout/Social'
import SideNav from './layout/SideNav'

import css from './layout/layout.scss'

const Layout = ({ children }) => (
    <div className={css.Layout}>

        <AppProvider>
            <Navigation />
            <Header />
            <SideNav />
            <Social />
        </AppProvider>

        <div className={css.content}>
            {children}
        </div>

    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
