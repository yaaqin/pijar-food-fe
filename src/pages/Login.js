import React from 'react'

import '../style/Login.css'

export default function Login() {
  return (
    <section className="main-login">
      <div className="left-login">
        <img src="/images/barbecue-1.png" />
      </div>
      <div className="right-login">
        <div className="right-login-child">
          <div className="login-title">
            <h2>Welcome</h2>
            <p>Login to your exiting account.</p>
          </div>
          <div className="regis-input">
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Enter Email Adress"
              />
            </span>
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </span>
            <span>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                Default checkbox
              </label>
            </span>
          </div>
          <button type="button" className="btn btn-warning">Log In</button>
        </div>
      </div>
    </section>
  )
}