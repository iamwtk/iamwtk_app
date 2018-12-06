import React from 'react'
import PropTypes from 'prop-types'
import css from './title/title.scss'

const Title = ({ text }) => (
    <h1 className={css.Title}>{text}</h1>
)
Title.propTypes = {
    text: PropTypes.node.isRequired
}
export default Title
