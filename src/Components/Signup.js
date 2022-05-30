import React from 'react';
import '../Css/Signup.css';
import '../Css/Style.css';
// import BackgroundImage from "../Assets/signup_background.svg";
import LogoImage from "../Assets/logo.svg"
import ButtonMore from "../Assets/button_more.svg";



function Signup() {
  return (

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

          <div class="col-sm-6 p-3">
            <div className="alreadyMember p-3 d-flex justify-content-end">
              <span class="text">Already a member? <a href="#!" className="term-condition-text">Sign In</a>
                <img className='moreIcon' src={ButtonMore} alt="logo-img" /></span>
            </div>
            {/* Already Member Ends */}

            <div class="container mt-5">
              <div class="row">

                <div className="formText pb-4">
                  <h3 className="fw-normal mb-3" style={{ letterSpacing: `1px` }}>Work with us</h3>
                  <hr />
                  <h6 className="mt-3">Fill out your informations, We will reach you back as soon as possible!</h6>
                </div>
                {/* Form Text Ends */}

              
                <div class="form-group name1 col-md-6">
                  <label for="exampleInputEmail1" class="formText">Name</label>
                  <input type="text" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverName" placeholder='Tony Nguyen'/>
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">Restaurant Name</label>
                  <input type="text" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverPhone" placeholder='moontheme' />
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">Your email</label>
                  <input type="text" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverPhone" placeholder='Tonynguyen@example.com'/>
                </div>

                <div class="form-group name2 col-md-6">
                  <label for="exampleInputEmail1## Heading ##" class="formText">Your address</label>
                  <input type="text" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverPhone" placeholder='12303 Roffle Street 99200 Texas, USA' />
                </div>

                <div class="form-check">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label rememberme-text " for="form2Example3">
                    I accept the &nbsp;
                  </label>
                  <a href="#!" className="term-condition-text">Terms and Conditions</a>
                </div>
                
                <div class="formButton mt-3">
                  <button class="btn btn-info btn-lg rounded-pill" type="button">Send</button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>


  )
}

export default Signup
