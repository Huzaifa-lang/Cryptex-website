import React from 'react'
import { Link } from 'react-router-dom';
import "../CssOfComponents/Login.css";


function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Correct method name
  };
  return (
    <>
    <div className="login-background-container">
      <div className="glass-effect">
        {/* REUSEABLE */}

        <div className="wrapper">
          <div className="close-container">
            <Link to="/" className="close-icons"><i class="ri-close-fill"></i></Link>

          </div>

          <div className="login-container ">
            <h2 className="login-title">Sign Up</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="Confirmpassword"></label>
                <input
                  type="text"
                  name="Confirmpassword"
                  id="Confirmpassword"
                  placeholder="Confirm Password *"
                />
              </div>

              <div className="form-check-box-container">
                <div className="form-check-box">
                  <input type="checkbox" name="rememberMe"></input>
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <a href="#">
                  <span></span>
                </a>
              </div>

              <div className="form-group submit-button">
                <input type="submit" value="Submit" />
              </div>
            </form>

            <div className="sign-up-info-container">
              <p>
                Already Have an Account?{" "}
                <Link className="sign-up-redirect" to="/login">
                  Login..
                </Link>
              </p>
              <div className="or-container">
                <div className="or">
                  <p>OR</p>
                </div>
              </div>
            </div>

            <div className="social-media-container">
              <h5>Login with Social Media</h5>
              <div className="social-media-icons-container">
                <div className="sign-up-icon google">
                  <i class="ri-google-fill"></i>
                </div>

                <div className="sign-up-icon facebook">
                  <i class="ri-facebook-fill"></i>
                </div>

                <div className="sign-up-icon twitter">
                  <i class="ri-twitter-x-fill"></i>
                </div>

                <div className="sign-up-icon instagram">
                  <i class="ri-instagram-fill"></i>
                </div>

                <div className="sign-up-icon linkedin">
                  <i class="ri-linkedin-box-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Signup