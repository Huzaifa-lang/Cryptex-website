import React from 'react'
import '../CssOfComponents/Footer.css'

function Footer() {

    const [footerClickCheck, setFooterClickCheck] = React.useState([])

    React.useEffect(()=> {

        const array = Array(4).fill(false);
        setFooterClickCheck(array)
        


    },[])

    function togglefooterClick(i){
        console.log(i)

        setFooterClickCheck(preState=> {
            const newarray = [...preState]
            newarray[i] = !newarray[i] 

            return newarray

        })

    }



  return (
    <section id='footer'>
        <div className="footer-container">
            <div className="footer-link-container">

                <div className="footer-link"  onClick={()=> togglefooterClick("0")}>
       

                    <div className="footer-link-title-container  " >
                    <p className='footer-link-title'>Company</p>
                    <i class={"ri-arrow-" + (footerClickCheck["0"] ? "drop-up-fill" : "drop-down-fill")}></i>
                    </div>

                    <div className={"footer-link-content " + (footerClickCheck["0"] ? "open-footer" : "")}>
                        <p>Home</p>
                        <p>API</p>
                        <p>Trading Fees</p>
                        <p>Resellers</p>
                        <p>Blog</p>
                        <p>Press Center</p>
                    </div>
                </div>

                <div className="footer-link" onClick={()=> togglefooterClick("1")}>

                    <div className="footer-link-title-container">
                    <p className='footer-link-title'>TERMS</p>
                    <i class={"ri-arrow-" + (footerClickCheck["1"] ? "drop-up-fill" : "drop-down-fill")}></i>
                    </div>

                    <div className={"footer-link-content " + (footerClickCheck["1"] ? "open-footer" : "")}>
                        <p>Terms</p>
                        <p>Privacy Policy</p>
                        <p>KYC & AML Policy</p>
                    </div>
                </div>

                
                <div className="footer-link" onClick={()=> togglefooterClick("2")}>

                    <div className="footer-link-title-container">
                    <p className='footer-link-title'>SERVICE</p>
                    <i class={"ri-arrow-" + (footerClickCheck["2"] ? "drop-up-fill" : "drop-down-fill")}></i>
                    </div>

                    <div className={"footer-link-content " + (footerClickCheck["2"] ? "open-footer" : "")}>
                        <p>Exchange</p>
                        <p>Merchant</p>
                        <p>Global Markets</p>
                        <p>Currency Converter</p>
                    </div>
                </div>

                
                <div className="footer-link" onClick={()=> togglefooterClick("3")}>

                    <div className="footer-link-title-container">
                    <p className='footer-link-title'>CONTACT</p>
                    <i class={"ri-arrow-" + (footerClickCheck["3"] ? "drop-up-fill" : "drop-down-fill")}></i>
                    </div>

                    <div className={"footer-link-content " + (footerClickCheck["3"] ? "open-footer" : "")}>
                        <p>Support Center</p>
                        <p>OTC Deals</p>
                        <p>System Status</p>
                    </div>
                </div>


            </div>

            <div className="footer-social-media-links-container">
                <a href=""><i class="ri-facebook-circle-fill"></i></a>
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-telegram-fill"></i></a>
                <a href=""><i class="ri-linkedin-box-fill"></i></a>
                <a href=""><i class="ri-reddit-fill"></i></a>
                <a href=""><i class="ri-pinterest-fill"></i></a>
                <a href=""><i class="ri-instagram-fill"></i></a>
                <a href=""><i class="ri-youtube-fill"></i></a>
            </div>

            <div className="footer-copyright-continer">
                <img src="/logo.png" alt="" style={{width: "200px"}}/>
                <div className="copyright">
                    <p>© Cryptex, 2016-2024. All rights reserved.</p>
                    <br />
                    <p>International Payment Service Provider Limited Liability Company. Registered address: Euro House, Richmond Hill Road, Kingstown, St. Vincent and the Grenadines, P.O. Box 2897</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer