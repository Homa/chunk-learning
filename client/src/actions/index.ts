import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_USER } from './types';

export const fetchUser = () =>
  async (dispatch: Dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const handleToken = (token: string) =>
  async (dispatch: Dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
};
