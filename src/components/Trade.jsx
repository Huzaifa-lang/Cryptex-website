import React from 'react'
import '../CssOfComponents/Trade.css'

function Trade() {
  return (
    <section id='trade-container'>

      <div className="trade-tools-title">
        <p className='smallest-btn'>Market</p>
        <h4 className='trade-title'>Tools For Effective Trading</h4>
        <p className='div-description'>Take advantages of features to analayze forcast and manage your <br />assets in cryptocurrency market </p>
      </div>

      <div className="tools-container">
        
        <div className="spot-trading-container background-image-1">
          <a href=""><i class="ri-line-chart-line"></i></a>
          <p className='spot-trading-container-title'>Spot trading</p>
          <p className='spot-trading-container-description'>Buy, sell, exchange, store and trade crypto with no limits and no borders</p>
          <button id='button_1'>Trade</button>
          
        </div>


        
        <div className="spot-trading-container background-image-2">
          <a href=""><i class="ri-group-fill"></i></a>
          <p className='spot-trading-container-title'>OTC Desk</p>
          <p className='spot-trading-container-description'>Cryptex OTC Desk enables traders to buy, sell and exchange cryptocurrencies at fixed rate.</p>
          <button id='button_1'>Send request</button>
          
        </div>


      </div>
    </section>
  )
}

export default Trade