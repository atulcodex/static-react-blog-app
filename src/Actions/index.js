import JsonPlaceholder from '../APIS/JsonPlaceholder';

export const fetchPosts = async () => {

    const response = await JsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POST',
        payload: response
    };
};