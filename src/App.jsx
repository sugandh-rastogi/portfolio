import { useState } from 'react'
import NavBar from "./components/navBar";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
function App() {


  return (
    <div className="App">
     <NavBar/> 
     <Home/>
     <About/>
     <Skills/>
     <ContactForm/>
     <hr></hr>
      <footer className='py-4 bg-[#0a192f] text-gray-300 text-center'>made with <img className='w-4 inline-block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"></img> at CodeYogi</footer>
    </div>
  )
}

export default App
