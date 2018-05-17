import axios from 'axios';
import { FETCH_POSTS, SUBMIT_POST } from './types';

export const submitPost = (values) => async dispatch => {
    const res = await axios.post('/api/posts', values);
    dispatch({ type: SUBMIT_POST, payload: res.data });
  };
  
  export const fetchPosts = () => async dispatch => {
    const res = await axios.get('/api/posts');
  
    dispatch({ type: FETCH_POSTS, payload: res.data });
  };
  