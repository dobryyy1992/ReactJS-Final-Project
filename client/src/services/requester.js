const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json'
        };
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    return options;
};

const requester = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');