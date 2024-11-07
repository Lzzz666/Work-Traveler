
import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">登入</h2>
        
        <form className="form">
          <div className="input-group">
            <label htmlFor="email">電子郵件</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@domain.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">密碼</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="submit-btn">
            登入
          </button>

          <p className="register-link">
            還沒有帳號？<a href="#">立即註冊</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
