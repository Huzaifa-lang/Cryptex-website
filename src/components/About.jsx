import React from 'react'
import '../CssOfComponents/About.css'

function About() {
  return (
    <section id='about'>
      <div className="about-container">

        <ul className="performance-container">

            <li><div className="performance-box">

              <div className="box-number">
                <p id='box-number-number'>22</p>
                <p id='box-number-title'>million</p>
              </div>
              <p id='box-below-title'>Operations for the year 2023</p>
            </div></li>
            
            <li><div className="performance-box">

              <div className="box-number">
                <p id='box-number-number'>24/7</p>
              </div>
              <p  id='box-below-title'>Continous Support</p>
            </div></li>

          


          
            <li><div className="performance-box">

              <div className="box-number">
                <p id='box-number-number'>4</p>
                <p id='box-number-title'>level</p>
              </div>
              <p id='box-below-title'>Protection of your account</p>
            </div></li>
            


            <li><div className="performance-box">

              <div className="box-number">
                <p id='box-number-number'>8</p>
                <p id='box-number-title'>Years</p>
              </div>
              <p id='box-below-title'>On market</p>
            </div></li>



        </ul>

        <div className="about-img-container">

          <img src="/promo-en.CEjdnvu0.webp" alt="" />        
        </div>

        <div className="pause">

          <div className="marquee marquee--6">
            <img className="marquee__item" src="/silde_logo1.webp" alt="" />
            <img className="marquee__item" src="/silde_logo2.webp" alt="" />
            <img className="marquee__item" src="/silde_logo3.webp" alt="" />
            <img className="marquee__item" src="/silde_logo4.webp" alt="" />
            <img className="marquee__item" src="/silde_logo5.webp" alt="" />
            <img className="marquee__item" src="/silde_logo2.webp" alt="" />
          </div>
        
        </div>

        
      </div>
    </section>
  )
}

export default About