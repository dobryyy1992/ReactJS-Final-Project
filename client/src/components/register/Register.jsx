import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="RegisterPage">
      <div className="register-content">
        <h1>Create an Account</h1>
        <p>Join our community and start exploring books!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
      </div>
    </section>
  );
}