import React from 'react'
import Typing from 'react-typing-animation'

import css from './typeWritter/typeWritter.scss'

const TypeWriter = () => (
    <div className={css.TypeWriter}>        
        <Typing cursorClassName={css.typeCursor}>
            <span>full stack</span> <span>JavaScript</span> <span>developer</span><span className={css.cursor}/>
        </Typing>        
    </div>
)

export default TypeWriter
