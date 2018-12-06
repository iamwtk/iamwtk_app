import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import css from './navigation/navigation.scss'
import Links from './navigation/Links'
import withAppContext from '../../context/withAppContext'



const Navigation = ({ navOpen = true }) => (
    <CSSTransition
        in={navOpen}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
            enterActive: css.enter,
            enterDone: css.open,
            exitActive: css.exit
        }}
    >
        <nav className={css.Navigation}>
            <Links />
        </nav>
    </CSSTransition>
)

Navigation.propTypes = {
    navOpen: PropTypes.bool
}

export default withAppContext(Navigation)
