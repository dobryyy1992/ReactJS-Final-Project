import * as requester from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/books';

export const gelAll = async () => {
    const result = await requester.get(baseUrl);

    return result;
};