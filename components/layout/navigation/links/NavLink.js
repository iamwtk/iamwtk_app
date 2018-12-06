import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import withAppContext from '../../../../context/withAppContext'


const NavLink = ({ to, cssClass = null, activeClass = 'active', children, path, closeNav }) => (    
    <Link href={to}>
        <a 
            className={[cssClass, path === to ? activeClass : null].join(' ')}
            onClick={closeNav}
        >
            {children}
        </a>
    </Link>      
)

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    closeNav: PropTypes.func
}
export default withAppContext(NavLink)
