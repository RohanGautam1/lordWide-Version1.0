import React from 'react'
import '../Css/Signup.css';
import '../Css/Style.css';
import { AiOutlineLeft } from "react-icons/ai";
import BackgroundImage from '../images/big-image.png';
import LogoImage from '../images/logo.svg';
import ButtonMore from '../images/button-more.svg';
// import { Link } from 'react-router-dom';

// AiOutlineLeft

function Forgot() {
  return (
    <>

<section class="vh-100">
      <div class="container-fluid">
        <div class="row">

          <div class="col-sm-6 px-0 d-none d-sm-block">
            <div className="backgroundImage w-100 vh-100">
              <div className="logoImage p-5">
                <img src={LogoImage} alt="" srcset="" />
              </div>
              <div className="imageText">
                <h1>Bring your restaurant to the next level.</h1>
              </div>
            </div>
          </div>
          {/* Image Ends */}

          <div class="col-sm-6">
            <div className="alreadyMember p-3 d-flex justify-content-end">
              <span class="text">New User? Create an Account
                <img className='moreIcon' src={ButtonMore} alt="logo-img" /></span>
            </div>
            {/* Already Member Ends */}

            <div class="container">
              <div class="row">

              <h3 class="fw-normal mb-3 pb-3" style={{ letterSpacing: `1px` }}>Work with us</h3>
                <hr/>
                <h6>Fill out your informations, We will reach you back as soon as possible!</h6>

                <div class="form-group name1 col-md-6">
                  <label for="exampleInputEmail1" class="formText">FIRST NAME:*</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="muverName" />
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">LAST NAME:*</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="muverPhone" />
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">LAST NAME:*</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="muverPhone" />
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">LAST NAME:*</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="muverPhone" />
                </div>

                <div class="form-check rememberme-div mt-1 mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label rememberme-text " for="form2Example3">
                                        I accept the &nbsp;
                                    </label>
                                    <a href="#!" className="term-condition-text">Terms and Conditions</a>
                                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>





















    {/* ============================================== */}
      <div className="container-fluid login-container">
        <div className="row">


          <div className="col-md-6 bg-img " style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <img className='logo-image' src={LogoImage} alt="logo-img" />
            <h1 className="img-txt mt-5 mb-0 ">Bring your restaurant <br /> to the next level. </h1>
          </div>
          
          {/* Form Start */}
          <div className="col-md-6">

          <div className='p-4' >
            <p className= "text-end text-decoration-none pr-0 new-user-para">New User? <Link className="text-decoration-none a-color "to="/Signup">Create an Account</Link>
            <img className='logo-image2' src={LogoImage2} alt="logo-img" /></p>
          </div>

            <div className="col-md-6 offset-md-3 forgot-login-form ">
              <h1 className="auth_title forget-pass">Forgot password?</h1>
              <p className="paragraph-text">
                Enter the email address you used when you joined and we'll send you instructions to reset your password.
              </p>

              <form>

                <div className="form-group mb-3">
                  <label htmlFor="">Your email</label>
                  <input type="email" className="form-control email-section" name="email" placeholder="Tonynguyen@example.com" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-lg btn-block w-100 Submit-Button border-0">Submit</button>
                </div>
                <div className="form-group other_auth_links mt-3">
                  <Link className="text-decoration-none a-color" to="/SignIn"> <AiOutlineLeft /> Back to sign in </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgot
