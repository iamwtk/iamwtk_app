import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './socialIcon/socialIcon.scss'

const SocialIcon = ({ url, icon, label = null }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={[css.SocialIcon, css[label]].join(' ')}>
        <FontAwesomeIcon icon={icon} />
    </a>
)

SocialIcon.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    label: PropTypes.string
}

export default SocialIcon
