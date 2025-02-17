import React from 'react'
import '../CssOfComponents/Googleapp.css'

function Googleapp() {
  return (
    <section id='google-app'>

      <div className="google-app-container">

      
      
      <div className="google-app-img">
        <img src="/app-image-en.Bb8WS5uT.webp" alt="" />

      </div>

      <div className="google-app-text">
        <p className='smallest-btn'> App</p>
        <h4 className='trade-title googleapp-title'>Trade whereever you are</h4>

        <div className="qr-container">
          <img src="/qr.jpg" alt="" />

          <div className="qr-container-text">
            <p className='qr-container-text-first'>Available for Android</p>
            <p className='qr-container-text-second'>Scan QR code to download the app</p>
          </div>

        </div>

        <div className="apps-links-container">

        <div className="app-link">
          <a href=""><i class="ri-apple-fill"></i></a>
          <p>App Store</p>
        </div>


        <div className="app-link">
          <a href=""><i class="ri-google-play-fill"></i></a>
          <p>Play Market</p>
        </div>


        </div>


      </div>

      </div>
    </section>
  )
}

export default Googleapp
