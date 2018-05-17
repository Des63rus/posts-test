import { FETCH_POSTS, SUBMIT_POST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.posts;
    case SUBMIT_POST:
      state.push(action.payload);
      return Object.assign([], state);
    default:
      return state;
  }
}
