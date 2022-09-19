import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../feature/post/postsSlice';
import userReducer from '../feature/users/usersSlice';

export const store = configureStore({
    reducer:{
       posts: postsReducer,
       users: userReducer,
    }
})
