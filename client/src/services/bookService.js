import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/books';

export const getAll = async () => {
    const result = await requester.get(baseUrl);

    return result;
};