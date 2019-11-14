import _ from 'lodash'; 
import JsonPlaceholder from '../APIS/JsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    _.map(getState().posts, 'userId');  //getState will give access of our reducers
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