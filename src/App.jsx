import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoinProvider from './context/CoinContext'
import Coins from './components/Coins'
import Trade from './components/Trade'
import Broker from './components/Broker'
import Services from './components/Services'
import Googleapp from './components/Googleapp'
import Blog from './components/Blog'
import Faq from './components/Faq'
import Lastpage from './components/Lastpage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <CoinProvider>
        <Navbar />
        <Hero />
        <About />
        <Coins />
        <Trade />
        <Broker />
        < Services />
        < Googleapp />
        <Blog />
        < Faq />
        <Lastpage />
        < Footer />
        
        
      </CoinProvider>
    </>
  )
}

export default App
