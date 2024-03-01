import React from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import WorkExperiences from './components/WorkExperiences/WorkExperiences'
import Certificates from './components/Certificates/Certificates'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>

      <Navbar />

      <div className='container'>

        <Hero />

        <Skills />

        <Projects />

        <Certificates />

        <WorkExperiences />

        <ContactMe/>

      </div>

      <Footer/>

    </>
  )
}

export default App
