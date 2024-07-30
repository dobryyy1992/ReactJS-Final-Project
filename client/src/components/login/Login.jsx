import { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="LoginPage">
            <div className="login-content">
                <h1>Welcome Back</h1>
                <p>Log in to your account to continue your journey</p>
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
                    <button type="submit" className="submit-btn">Log In</button>
                </form>
                <p className="forgot-password"><a href="/forgot-password">Forgot your password?</a></p>
                <p className="register-link">Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </section>
    );
}