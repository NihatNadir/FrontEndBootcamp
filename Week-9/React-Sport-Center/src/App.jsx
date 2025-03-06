import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import OurClass from "./components/OurClass/OurClass"
import Bmi from "./components/Bmi/Bmi"
import Trainer from "./components/Trainer/Trainer"
import Purchase from "./components/Purchase/Purchase"
import Client from "./components/Client/Client"
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <OurClass />
      <Bmi />
      <Trainer />
      <Purchase />
      <Client />
      <Contact />
      <Footer />
    </>
  )
}

export default App
