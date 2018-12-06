import React from 'react'
import Links from './navigation/Links'

import css from './sideNav/sideNav.scss'


const SideNav = () => (
    <div className={css.SideNav}>
        <Links type={'SideNav'}/>
    </div>
)

export default SideNav
