import { FETCH_USER, FetchUserAction } from '../actions/types';

export default function(state = {}, action: FetchUserAction) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
