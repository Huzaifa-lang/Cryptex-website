import React from 'react'
import '../CssOfComponents/Services.css'

function Services() {

  const [showExchange, setShowExchange] = React.useState(true)
  const [showMarket, setShowMarket] = React.useState(false)
  const [showMerchant, setShowMerchant] = React.useState(false)

  function servicesHandel(buttonid) {
    if(buttonid === 'market' && !showMarket )
    {
      setShowMarket(!showMarket);
      setShowExchange(false);
      setShowMerchant(false);

    }
    else if(buttonid === 'merchant' && !showMerchant) 
    {
      setShowMerchant(!showMerchant); 
      setShowExchange(false);
      setShowMarket(false);

 

    }
    else if(buttonid === 'exchange' && !showExchange) 
      {
        setShowExchange(!showExchange) ;
        setShowMarket(false)
        setShowMerchant(false);
  
   
  
      }


    

  }

  
  return (
    <section id='services'>
        <div className="services-title-container">
            <p className='smallest-btn'>Services</p>
            <h4 className='trade-title'>Other Crypto products</h4>
            <p className='div-description'>Export the wide range of fiancial services for both individual<br className='mobile-hide'/> and businessess</p>
        </div>

        <div className="services-container">

            <div className="btn-container">
                    <button className='services-btn' onClick={()=> servicesHandel('exchange') } style={{backgroundColor: showExchange ? '#2E3847' : 'transparent'}}>
                    <i class="ri-arrow-left-right-line"></i>
                    Exchange
                    </button>

                    
                    <button className='services-btn'  onClick={()=> servicesHandel('market') } style={{backgroundColor: showMarket ? '#2E3847' : 'transparent'}}>
                    <i class="ri-shopping-bag-2-line"></i> 
                    Marker
                    </button>

                    <button className='services-btn' onClick={()=> servicesHandel('merchant') } style={{backgroundColor: showMerchant ? '#2E3847' : 'transparent'}}>
                        <i class="ri-shopping-bag-2-line"></i>
                        Merchant<span>New</span>
                    </button>

            </div>

            <div className="services-details-container">

              <div className="services-container-exchange" id='exchange-container' style={{display: showExchange ? 'flex' : 'none'}}>

                <div className="services-container-details">

                <p className='services-container-title'>Fast cryptocurrency exchange on favorable items</p>
                <p className='services-container-description'>We strive to provide a simple and convenient exchange process so that every user can quickly close the transaction. No registration or verification is required to complete the transaction.</p>
                <button id='button_1'>Exchange</button>
                </div>

                <div className="services-container-img " id='exchange-img'>
                  <img src="/exchanger-image-.webp" alt="" />
                  
                </div>


              </div>


              
              <div className="services-container-exchange " id='market-container' style={{display: showMarket ? 'flex' : 'none'}}>

                <div className="services-container-details">

                <p className='services-container-title'>Quick access to statistical data</p>
                <p className='services-container-description'>We provide data on cryptocurrencies, including their current price, trading volume, market capitalization and other indicators. This information helps investors and traders make informed decisions regarding their crypto portfolio</p>
                <button id='button_1'>More details</button>
                </div>

                <div className="services-container-img" id='market-img'>
                <img src="/market-image.webp" alt="" />

                  
                </div>


              </div>


              
              <div className="services-container-exchange " id='merchant-container' style={{display: showMerchant ? 'flex' : 'none'}}>

                <div className="services-container-details">

                <p className='services-container-title'>Convenient service for accepting payments in cryptocurrency</p>
                <p className='services-container-description'>We provide the infrastructure for processing cryptocurrency transactions, including a payment gateway, wallets and conversion systems, including to fiat. Adaptation for all types of business, including high-risk areas</p>
                <button id='button_1'>Send request</button>
                </div>

                <div className="services-container-img" id='merchant-img'>

                <img src="/merchant-image.webp" alt="" />

                  
                </div>


              </div>

              




            </div>

        </div>
    </section>
  )
}

export default Services