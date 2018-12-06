import React from 'react'
import Link from 'next/link'

import css from './logo/logo.scss'

const Logo = () => (
    <div className={css.logoWrap}>
        <Link href="/" >
            <a className={css.logo}>
                <span>Iam</span>WTK
            </a>
        </Link>
    </div>
)

export default Logo
