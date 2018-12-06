import React from 'react'
import Link from 'next/link'
import Title from './Title'
import TypeWriter from './home/TypeWriter'

import css from './home/home.scss'

const Home = () => (
  <section className={css.Home}>
    <Title text={<>Iam<br className="breakline" />WTK</>} />
    <TypeWriter />
    <Link href="/work"><a className={css.link}>see my work</a></Link>
  </section>
)

export default Home
