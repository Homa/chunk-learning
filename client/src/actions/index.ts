import axios from 'axios';
import { FETCH_USER } from './types';
import { Dispatch } from 'redux';

export const fetchUser = () =>
  async (dispatch: Dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
  }

export const handleToken = (token: string) =>
  async (dispatch: Dispatch) => {
    const res = await axios.post('/api/stripe', token)
    dispatch({ type: FETCH_USER, payload: res.data });
  }
