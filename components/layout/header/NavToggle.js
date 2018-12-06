import React from 'react'
import PropTypes from 'prop-types'
import withAppContext from '../../../context/withAppContext'

import css from './navToggle/navToggle.scss'

const NavToggle = ({ toggleNav, navOpen = false }) => (
    <div className={[css.navBtn, navOpen ? css.active : null].join(' ')} onClick={toggleNav}>
        <span />
        <span />
        <span />
    </div>
)
NavToggle.propTypes = {
    toggleNav: PropTypes.func.isRequired,
    navOpen: PropTypes.bool
}
export default withAppContext(NavToggle)
