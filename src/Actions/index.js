import JsonPlaceholder from '../APIS/JsonPlaceholder';

export const fetchPosts = async () => {

    const promise = await JsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POST',
        payload: promise
    };
};