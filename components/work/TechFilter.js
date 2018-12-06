import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faNodeJs, faReact, faHtml5, faCss3, faSass, faPhp, faWordpress, faJoomla } from '@fortawesome/free-brands-svg-icons'

import css from './techFilter/techFilter.scss'

const TechFilter = () => (
    <section className={css.TechFilter}>
        <ul>
            <li><FontAwesomeIcon size="xs" icon={faJs} /></li>
            <li><FontAwesomeIcon size="xs" icon={faNodeJs} /></li>
            <li><FontAwesomeIcon size="xs" icon={faReact} /></li>
            <li><FontAwesomeIcon size="xs" icon={faCss3} /></li>
            <li><FontAwesomeIcon size="xs" icon={faHtml5} /></li>
            <li><FontAwesomeIcon size="xs" icon={faSass} /></li>
            <li><FontAwesomeIcon size="xs" icon={faPhp} /></li>
            <li><FontAwesomeIcon size="xs" icon={faWordpress} /></li>
            <li><FontAwesomeIcon size="xs" icon={faJoomla} /></li>
        </ul>
        <span>I work with these technologies + more</span>
    </section>
)

export default TechFilter
