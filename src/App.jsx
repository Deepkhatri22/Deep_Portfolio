import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import HomeSection from './Component/HomeSection'
import Footer from './Component/Footer'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Education from './Component/Education'
import Contact from './Component/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ToastContainer />
      <Contact/>
      <HomeSection />
      <Footer />
    </>
  )
}

export default App
