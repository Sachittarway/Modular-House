import React, { useState } from 'react';
import './VendorLogin.css';

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="ring">
      <i style={{'--clr': '#00ff0a'}}></i>
      <i style={{'--clr': '#ff0057'}}></i>
      <i style={{'--clr': '#fffd44'}}></i>
      <div className="login">
        <h2>Vendor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div className="links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorLogin;
