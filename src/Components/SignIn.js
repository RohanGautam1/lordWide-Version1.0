import React from 'react';
import '../Css/SignIn.css';
import LogoImage from "../Assets/logo.svg"
import ButtonMore from "../Assets/button_more.svg";
import {Link} from 'react-router-dom'; 


function SignIn() {
    return (
  
      <section class="vh-100 signup">
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
                <span class="text">New User? <Link to={"/Signup"} className="term-condition-text">Create an Account</Link>
                  <img className='moreIcon' src={ButtonMore} alt="logo-img" /></span>
              </div>
              {/* Already Member Ends */}
  
              <div class="container form mt-5">
                <div class="row">
  
                  <div className="formText pb-4">
                    <h3 className="fw-normal mb-3" style={{ letterSpacing: `1px` }}>Sign In</h3>
                    <hr />
                    <h6 className="mt-3">Sign in using your infos</h6>
                  </div>
                  {/* Form Text Ends */}
  
                  <div class="form-group name2 col-md-6">
                    <label for="exampleInputEmail1## Heading ##" class="formText">Your email</label>
                    <input type="text" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverPhone" placeholder='Tonynguyen@example.com'/>
                  </div>
  
                  <div class="form-group name2 col-md-6">
                    <label for="exampleInputEmail1## Heading ##" class="formText">Password</label>
                    <input type="password" class="form-control rounded-pill" id="name" aria-describedby="emailHelp" name="muverPhone" placeholder='•••••••••' />
                  </div>
  
                  <div class="form-check">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label rememberme-text " for="form2Example3">
                      Remember me &nbsp;
                    </label>
                    <Link to={"/Forgot"} className="term-condition-text">Forgot password?</Link>
                  </div>
                  
                  <div class="formButton mt-3">
                    <button class="btn btn-info btn-lg rounded-pill" type="button">Sign in</button>
                  </div>
  
                </div>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
  
  
    )
  }
  
  export default SignIn;