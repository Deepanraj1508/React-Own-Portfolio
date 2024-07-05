import React from 'react'
import Hero from '../components/Hero/Hero'
import Project from '../components/Project/Project'
import AboutPage from '../components/AboutPage/AboutPage'
import ContactUs from '../components/ContactUs/ContactUs'
import Skills from '../components/Skills/Skills'

const Main = () => {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Project/>
      <AboutPage/>
      <ContactUs/>
    </div>
  )
}

export default Main