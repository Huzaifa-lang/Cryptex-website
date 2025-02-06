import React from 'react'
import '../CssOfComponents/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    const navRef = React.useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const closeNavbar = () => {
      navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header id='header'>
        <div className="navbar-first-container">

        <img src="/logo.png" alt="" />

        <nav ref ={navRef} className='navbar-pages'>
                <div className="navbar-pages-details">
                <img  className='nav-btn-img' src="/logo.png" alt="" />

                    
                <button className='nav-btn nav-close-btn' onClick={showNavbar}><i class="ri-close-line"></i></button>

                </div>
                <a href="#coins" onClick={closeNavbar}>Buy or Sell Crypto</a>
                <a href="#trade-container" onClick={closeNavbar}>Spot</a>
                <a href="#coins" onClick={closeNavbar}>Market</a>
                <a href="#blog" onClick={closeNavbar}>Blog</a>
                <a href="#faq" onClick={closeNavbar}>Support Center</a>


        </nav>
 


        </div>
 
        <div className="navbar-btn">

            <Link to="/login"><button className='second-btn'>Sign in</button></Link>
            <Link to="/signup"><button className='main-button'>Create Account</button></Link>

            <button  className='nav-btn' onClick={showNavbar}><i class="ri-menu-line"></i></button>



        </div>

    </header>
  )
}

export default Navbar