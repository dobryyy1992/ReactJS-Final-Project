import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/books';

export const getAll = async () => {
    const result = await requester.get(baseUrl);

    return result;
};

export const getOne = async (id) => {
    const result = await requester.get(`${baseUrl}/${id}`);

    return result;
}

export const create = async (bookData) => {
    const result = await requester.post(baseUrl, bookData);

    return result;
};