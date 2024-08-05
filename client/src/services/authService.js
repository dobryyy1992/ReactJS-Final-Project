import * as requester from './requester';

const baseUrl = 'http://localhost:3030/users';

export const register = async (email, paswword) => {
    requester.post(`${baseUrl}/register`, {
        email,
        paswword
    });
};

export const login = async (email, password) => {
    const result = await requester.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
};

export const logout = () => requester.get(`${baseUrl}/logout`);