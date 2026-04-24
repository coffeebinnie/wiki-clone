"use client";
import React, { useState } from "react";

export default function TumblrClone() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="page">
      <nav className="navbar">
        <div style={{fontSize: '32px', fontWeight: '900', cursor: 'pointer'}}>t</div>
        <div className="search-box">Search Tumblr</div>
        <button 
          className="login-nav-btn" 
          style={{background: '#00cf92', color: 'black', border: 'none', padding: '6px 12px', borderRadius: '3px', fontWeight: 'bold', cursor: 'pointer'}}
          onClick={() => setIsLogin(true)}
        >
          Log in
        </button>
      </nav>

      <main className="main-container">
        <h1 className="tumblr-logo">tumblr</h1>
        
        <div className="auth-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" className="t-input" />
            <input type="password" placeholder="Password" className="t-input" />
            
            <button className="signup-btn">
              {isLogin ? "Log in" : "Sign up"}
            </button>
          </form>

          <div className="divider">or</div>

          <button className="social-btn">
            <img src="https://www.google.com/favicon.ico" width="16" alt="" />
            Continue with Google
          </button>
          <button className="social-btn">
            <img src="https://www.apple.com/favicon.ico" width="16" alt="" />
            Continue with Apple
          </button>
          
          <p 
            style={{marginTop: '20px', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline'}} 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "New to Tumblr? Register" : "Forgot password?"}
          </p>
        </div>
      </main>

      <footer className="footer">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Support</span>
      </footer>
    </div>
  );
}