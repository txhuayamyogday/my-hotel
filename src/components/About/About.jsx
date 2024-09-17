import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import style from './About.module.css'
import '../style/style.css'
const Section_1 = () => {
  return(
    <section className={style.about_container} id={style.about_bg}>
      <div>
        <h4>Home &gt; </h4> 
        <h4>About &gt; </h4>
      </div>
      <div>
        <h1>About us</h1>
      </div>
    </section>
  )
}
const Section_2 = () => {
  return(
    <section className={style.about_container}>
      
    </section>
  )
}
const Section_3 = () => {
  return(
    <section className={style.about_container}>
      
    </section>
  )
}
const Section_4 = () => {
  return(
    <section className={style.about_container}>
      
    </section>
  )
}
function About() {
  return (
    <div className={style.main_about}>
      <header>
        <nav>
          <NavBar number_page={2}/>
        </nav>
      </header>
        <main>
          <Section_1/>
          <Section_2/>
          <Section_3/>
          <Section_4/>
        </main>
    </div>
  )
}

export default About
