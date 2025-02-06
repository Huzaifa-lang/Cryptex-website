import React, { useContext } from 'react'
import '../CssOfComponents/Hero.css'
function Hero() {



  return (

    <section id='hero'>
        <div className="hero-container">

            <div className="hero-btns-container">

                <p id='have-an-account-btn'>Have an account</p>

                <div className="trade-btn">
                    <p>Go to Trading</p>
                    <i class="ri-arrow-right-line"></i>
                </div>

            </div>

            <div className="hero-text-container">
                <h4 className='div-title'>Buy and sell cryptocurrency <br />on Cryptex</h4>
                <p className='div-description'>Open the door to the world of cryptocurrency:acquire, trade and invest <br className='mobile-hide'/>with confidence!</p>
            </div>

            <div className="hero-signup-container">
                <div className="signup-and-email-btns-container">
                <div class="input-wrapper">
                <i class="ri-mail-line"></i>
                    <input type="text" placeholder="E-mail"/>
                </div>

                    <button id='button_1'>Sign Up</button>
                </div>
                <p id='privacy'>We value your <span>privacy.</span></p>
            </div>

        </div>

    </section>
  ) 
}

export default Hero