import { useContext } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

export default function Login() {
    const { loginSubmitHandler  } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, loginSubmitHandler );

    return (
        <section id="LoginPage">
            <div className="login-content">
                <h1>Welcome Back</h1>
                <p>Log in to your account to continue your journey</p>
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
                    <button type="submit" className="submit-btn">Log In</button>
                </form>
                <p className="register-link">Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </section>
    );
}