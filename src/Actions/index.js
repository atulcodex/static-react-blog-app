import _ from 'lodash'; 
import JsonPlaceholder from '../APIS/JsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch) => {
    console.log("going to fetchPosts");
    await dispatch(fetchPosts());
    console.log("already to fetchPosts");
};

export const fetchPosts = () => async (dispatch) => {
    const response = await JsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await JsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};


// export const fetchUser = (id) => (dispatch) => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize( async(id, dispatch) => {
//     const response = await JsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });