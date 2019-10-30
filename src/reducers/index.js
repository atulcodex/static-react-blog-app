import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: PostsReducer,
    user: userReducer
});