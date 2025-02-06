import React from 'react'
import '../CssOfComponents/Faq.css'

function Faq() {

  const faqLength = 8;

  const [checkClick, setCheckClick] = React.useState([])

  const[faqQuestionsContent, setFaqQuestionContent ] = React.useState([
    {
      question : "What is a cryptocurrency exchange?",
      answer : <p>A cryptocurrency exchange is an online platform where users can buy, sell or exchange cryptocurrency for other digital or fiat currencies</p>
    },
    {
      question : "How to start trading on Cryptex?",
      answer : <p>To start trading on our exchange, you need to register an account, go through the verification procedure and deposit funds into your account. We described the registration and verification process in more detail in the <a href="">Getting Started</a> section of our Support Center.</p>
    },
    {
      question : "What cryptocurrencies are available for trading?",
      answer : <p>There are various cryptocurrencies available on our exchange such as Bitcoin (BTC), Ethereum (ETH), Tether (USDT TRC20 and ERC20) and many others. The current list of coins is displayed on the <a href="">Status</a> page in real time.</p>
    },
    {
      question : "How is the security of my account ensured?",
      answer : <p>You have access to up to 5 levels of account protection for maximum protection from intruders. More information is available in the <a href="">Security</a> section of our Support Center.</p>
    },
    {
      question : "What fees are charged for trading?",
      answer : <p>Fees vary depending on the type of transaction, details are available on <a href="">this page</a>.</p>
    },
    {
      question : "What methods can I use to deposit or withdraw funds?",
      answer : <div className="faq-answer-long">
        <p>You can deposit or withdraw funds using cryptocurrencies or fiat money in any convenient way:</p>
        <br />
        <ul>
          <li><strong>Cash.</strong> Courier or contactless delivery available.
          <br />
          <ul>
            <br />
            <li><u>Available countries:</u> Azerbaijan, Belarus, UK, Germany, Georgia, Iran, Spain, Kazakhstan, Latvia, Lithuania, Moldova, Poland, Russia, Turkey, Ukraine, Uzbekistan, France, Czech Republic, Estonia, UAE</li>
            <br />
            <li><u>Available currencies:</u> British Pound, UAE Dirham, US Dollar, Euro, Polish Zloty, Russian Ruble, Turkish Lira, Ukrainian Hryvnia.</li>
          </ul>
          </li>
          <br />
          <li><strong>Bank cards</strong> Visa/MasterCard/MIR. At the moment, Sberbank and Tinkoff cards are available in personal account.</li>
          <br />
          <li><strong>Payment systems</strong> Perfect Money, Advanced Cash, WebMoney.</li>
          <br />
          <li><strong>Money transfers</strong> SWIFT/SEPA/SBP.</li>
          <br />
          <li><strong>Cryptocurrencies:</strong> BTC, DAI, DASH, ETH, LTC, TRX, TUSD, USDC, USDT ERC20, USDT TRC20, XMR.</li>
          <br />
          <li><strong>Cryptex code.</strong> Generate instant Cryptex codes for settlements with counterparties without commission.</li>
        </ul>
        <br />
        <p>If you do not find the required method in your personal account, contact the manager for further details.</p>
      </div>  
    
    },
    {
      question : "What support options are available to users?",
      answer : <p>We provide 24/7 support via live chat, email and ticket system to resolve any issues.</p>
    },
    {
      question : "Can I make a cryptocurrency purchase using Cryptex?",
      answer : <p>Yes. Cryptex will assist in concluding transactions with real estate, cars or luxury goods worth more than $50,000. You can find out more and submit an application on <a href="">this page.</a></p>
    },
    
  ])


  React.useEffect(()=> {

    const array = Array(faqLength).fill(false)
    setCheckClick(array)

  },[faqLength])





  function toggleClick(index) {
    
    setCheckClick(preState => {
      const newClick = preState.map((value, i)=> {
        return (i === index ? !value : false)
      })

      return newClick

      
    })

    
  }


  const faqQuestions = checkClick.map((elm, i) => {

    return (

      <div className={"faq-question " + (checkClick[i] ? "faq-hover" : "")} index ={i} key={i} onClick={()=> toggleClick(i)}>

        <div className="faq-question-btn">
          {faqQuestionsContent[i].question} 
          <i className={"ri-" + (checkClick[i] ? "close-circle-line" : "add-circle-line")}></i>
        </div>

        <div className={"faq-answer " + (checkClick[i] ? "faq-answer-open" : "")}>{faqQuestionsContent[i].answer}</div>

      </div>
    )
  }) 
  

  


  




  
  
  return (
    <section id='faq'>
        <div className="faq-container">

            <div className="faq-container-text" >
                <p className='smallest-btn'>FAQs</p>
                <h4 className='trade-title '>Frequently asked questions</h4>
                <p className='div-description  '>Our detailed answers to the most common questions about <br /> cryptocurrency exchanges</p>
            </div>
            <div className="faq-question-container" >

              {faqQuestions}
            
            </div>

            <div className="faq-ask-container ">
            <a href=""><i class="ri-group-fill"></i></a>
            <p className='faq-ask-container-title'>Ask us</p>
            <p className='faq-ask-container-description'>Our Customer Service provides quality service 24/7. We strive to ensure that any issues are resolved efficiently and in a timely manner.</p>
            <button id='button_1'>Ask a question</button>




            </div>
        </div>
    </section>
  )
}

export default Faq