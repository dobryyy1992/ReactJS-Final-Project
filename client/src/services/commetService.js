import * as requester from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await requester.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (bookId, text) => {
    const result = await requester.post(baseUrl, {bookId, text});

    return result;
};