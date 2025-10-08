import { useState } from 'react'
import Home from './sections/Home/home.jsx'
import About from './sections/about/about.jsx'
import Project from './sections/projects/ProjectList.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header  from './components/header/Header.jsx';
import Contact from './sections/contact/Contact.jsx'
import './App.css'
import Footer from './components/footer/Footer.jsx';

function App() {
 

  return (
    <>
      <Header />
      <main>
      <Home />
      <About />
      <Project />
      <Contact />

      </main>
      <Footer/>

    </>
  )
}

export default App
