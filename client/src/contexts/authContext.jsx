import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password, values.confirmPassword);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
    };

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        avatar: auth.avatar,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;


