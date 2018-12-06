import React from 'react'

import Logo from './header/Logo'
import NavToggle from './header/NavToggle'

import css from './header/header.scss'


const Header = () => (
    <header className={css.Header}>
        <Logo />
        <NavToggle />
    </header>
)


export default Header
