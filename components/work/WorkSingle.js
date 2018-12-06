import React from 'react'
import PropTypes from 'prop-types'
import css from './workSingle/workSingle.scss'

const WorkSingle = ({ img, url, title }) => (
    <div className={css.WorkSingle}>
        <div className={css.inner}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={css.imgWrapper}>
                    <img src={img} alt='' />
                </div>
                <span className={css.link}>{title}</span>
            </a>
        </div>
    </div>
)

WorkSingle.propTypes = {
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default WorkSingle