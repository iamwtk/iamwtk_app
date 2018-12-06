import React from 'react'

import { faStackOverflow, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import SocialIcon from './social/SocialIcon'
import css from './social/social.scss'

const links = [
    { url: 'https://stackoverflow.com/users/6187448/iamwtk', icon: faStackOverflow, label:'stackoverflow'},
    { url: 'https://github.com/iamwtk', icon: faGithub, label:'github'},
    { url: 'https://www.linkedin.com/in/vit-srajbr-79104b141/', icon: faLinkedinIn, label:'linkedin'},
    { url: 'https://twitter.com/iamwtk', icon: faTwitter, label:'twitter'},
]

const Social = () => (
    <div className={css.Social}>
        <ul>
            {
                links.map(({ url, icon, label }) => (
                    <li key={url}>
                        <SocialIcon url={url} icon={icon} label={label} />
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Social
