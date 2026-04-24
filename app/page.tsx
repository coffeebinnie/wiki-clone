"use client";
import React, { useState } from "react";

export default function TumblrRedesign() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-left">
          <div className="t-logo-small">t</div>
          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input type="text" className="search-box" placeholder="Search Tumblr" />
          </div>
        </div>
        <button className="login-nav-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </nav>

      <main className="main-container">
        <h1 className="tumblr-logo-main">tumblr</h1>
        
        <div className="auth-form">
          <input type="email" placeholder="Email" className="t-input" />
          <input type="password" placeholder="Password" className="t-input" />
          
          <button className="action-btn">
            {isLogin ? "Log In" : "Sign up"}
          </button>

          <div className="divider-container">or</div>

          <button className="social-btn">
            <img src="https://www.google.com/favicon.ico" width="16" alt="" />
            Continue with Google
          </button>
          <button className="social-btn">
            <img src="https://www.apple.com/favicon.ico" width="16" alt="" />
            Continue with Apple
          </button>
          
          <p className="toggle-text">
            {isLogin ? "New to Tumblr? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up now" : "Log in"}
            </span>
          </p>
        </div>
      </main>

      <footer className="footer">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Jobs</span>
        <span>Support</span>
      </footer>
    </div>
  );
}