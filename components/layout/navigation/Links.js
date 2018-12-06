import React from 'react'
import NavLink from './links/NavLink'

import css from './links/links.scss'

const links = [
    {path: '/', label: 'home'},
    {path: '/work', label: 'work'},
    {path: '/about', label: 'about'},
    {path: '/contact', label: 'contact'}
]

const Links = ({ type = 'Navigation'}) => (
    <ul className={[css.Links, type === 'SideNav' ? css.SideNav : null].join(' ')}>
        { 
            links.map(link => (
                <li key={link.label}>
                    <NavLink 
                        to={link.path} 
                        cssClass={css.link} 
                        activeClass={css.active}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))
        }
    </ul>
)


export default Links
