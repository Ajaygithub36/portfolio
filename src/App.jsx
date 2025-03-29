import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Project from './components/project/Project'
import Skill from './components/skill/Skill'

const App = () => {
  return (
     <>
       <Navbar />
      <div >
        <Home />
        <About />
        <Project/>
        <Skill/>
        <Footer />
      </div>

     </>
  )
}

export default App
