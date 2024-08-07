import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, registerSubmitHandler);

  return (
    <section id="RegisterPage">
      <div className="register-content">
        <h1>Create an Account</h1>
        <p>Join our community and start exploring books!</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={onChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={onChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </section>
  );
}