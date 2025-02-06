import React from 'react'
import '../CssOfComponents/Broker.css'

function Broker() {
  return (
    <section id='broker'>
        <div className="broker-container">

            <div className="broker-title-container">
                <p className='smallest-btn'>Broker</p>
                <h4 className='trade-title broker-title'>Assistant in transaction with crypto assets</h4>
                <p className='div-description broker-description'>Cryptex Broker will help you perform any operation on the crypto market among the available trading pairs instantly in automated mode.</p>
                <button id='button_1'>Trade</button>
            </div>
            <div className="broker-image-container">
                <img src="/broker-image-en.Br2goW8x.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Broker