export const FETCH_USER = 'fetch_user';

export interface IUser {
    googleId: string;
    credits: number;
}

export interface FetchUserAction {
    type: typeof FETCH_USER;
    payload: IUser;
}
