import React from 'react'
import PropTypes from 'prop-types'

import WorkSingle from './work/WorkSingle'
import Title from './Title'


import css from './work/work.scss'
import TechFilter from './work/TechFilter'

//TODO: implement error handling

const Work = ({ workData = [], error }) => (
    <>
        <section className={css.Work}>
            <Title text={'WORK'} />
            <div className={css.works}>
                {
                    workData.map(work => <WorkSingle img={work.image} url={work.url} title={work.title} key={work.title} />)
                }
            </div>
        </section>
        <TechFilter/>       
    </>
)

Work.propTypes = {
    workData: PropTypes.array    
}
export default Work 