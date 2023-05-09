import React, { useEffect, useRef, useState } from "react";
import styles from 'Styles/Contact.module.css';
import loginStyle from 'Styles/Login.module.css'
import { Button, Form } from "react-bootstrap";
import Link from "next/link";

const Login = () => {
      const [showSignup, setShowSignup]: any = useState(false);
      const [showLogin, setShowLogin]: any = useState(true);
      const signupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
      }
      const loginClick = () => {
        setShowSignup(false);
        setShowLogin(true);
      }
      const login = () =>{
        return(
            <div className={loginStyle.main}>
                <div className="container">
                 <div className={loginStyle.outer_form}>
                 <div className={loginStyle.inner_form}>
                  <div className="contact-form-bg">
                    <form className={`${styles.contact_form} flw`}>
                      <h3 className={`${styles.contact_us_title} mb-4`}>
                        Login
                      </h3>
                      <div className="row">
                        <div className="row-md-6 row-lg-6">
                          <div className={styles.contact_form_label}>
                            <input
                              type="email"
                              id="name"
                              className={styles.form_control}
                              name="name"
                              placeholder="Your Email"
                            />
                            <p className={styles.errormsg}>
                            </p>
                          </div>
                        </div>
                        <div className="row-md-6 row-lg-6">
                        <div className={styles.contact_form_label}>
                            <input
                              type="password"
                              id="number"
                              className={styles.form_control}
                              name="number"
                              placeholder="Password"
                            />
                            <p className={styles.errormsg}>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 px-0">
                        <div>
                        <Button variant="primary" className={styles.log_btn} size="lg">Login</Button>
                        <p style={{paddingTop: '12px',
    cursor: 'pointer'}} onClick={() => signupClick()}>Don't have an account ? <span style={{color: '#4d0a71'}}><b>Sign Up</b></span></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                 </div>
            </div>
            </div>
        )
      }
      const signup = () =>{
        return(
            <div className={loginStyle.main}>
            <div className="container">
            
                <div className={loginStyle.outer_form}>
                <div className={loginStyle.inner_form}>
                  <div className="contact-form-bg">
                    <form className={`${styles.contact_form} flw`}>
                      <h3 className={`${styles.contact_us_title} mb-4`}>
                        Signup
                      </h3>
                      <div className="row">
                        <div className="row-md-6 row-lg-6">
                          <div className={styles.contact_form_label}>
                            <input
                              type="email"
                              id="name"
                              className={styles.form_control}
                              name="name"
                              placeholder="Signup Email"
                            />
                            <p className={styles.errormsg}>
                            </p>
                          </div>
                        </div>
                        <div className="row-md-6 row-lg-6">
                        <div className={styles.contact_form_label}>
                            <input
                              type="password"
                              id="number"
                              className={styles.form_control}
                              name="number"
                              placeholder="Password"
                            />
                            <p className={styles.errormsg}>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 px-0">
                        <div>
                        <Button variant="primary"  className={styles.log_btn}  size="lg">Signup</Button>
                          <p style={{paddingTop: '12px',
    cursor: 'pointer'}} onClick={()=>loginClick()}>Already have an account ? <span style={{color: '#4d0a71'}}><b>Login Here</b></span></p>
                        </div>
                      </div>
                    </form>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        )
      }
      const signupLogin = () =>{
        return(showLogin==true ? login() : signup())
      }
      return(
       signupLogin()
      )
}

export default Login;