import React from 'react'
import Link from 'next/link'

import Title from './Title'

import css from './about/about.scss'

const About = () => (
    <section className={css.About}>
        <Title text={'ABOUT'} />
        <p>Hi, my name is Vit and I am full-stack JavaScript developer. I specialize in React/Redux, Node.js, and WordPress. To see
    some of my work you can either visit <Link href="/work"><a>work section</a></Link> of this website or my <a href="https://github.com/iamwtk" rel="noopener noreferrer" target="_blank">GitHub profile.</a></p>
        <p>Enquires at <a href="mailto:me@iamwtk.com">me@iamwtk.com</a> or <Link href="/contact"><a>contact page</a></Link>.</p>
    </section>
)

export default About
