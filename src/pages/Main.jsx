import React from 'react'
// import Hero from '../components/Hero/Hero'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import AboutPage from '../components/AboutPage/AboutPage'
import ContactUs from '../components/ContactUs/ContactUs'
import Skills from '../components/Skills/Skills'

const Main = () => {
  return (
    <div>
      {/* <Hero/>
     */}
       <Skills/>
       <AboutPage/>
       <ProjectSection/>
       <ContactUs/> 
    </div>
  )
}

export default Main