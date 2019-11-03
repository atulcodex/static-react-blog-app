import JsonPlaceholder from '../APIS/JsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
    const response = await JsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//     const response = await JsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// };

export const fetchUser = _.memoize(function(id) { 
    return async function(dispatch) {
        const response = await JsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
});