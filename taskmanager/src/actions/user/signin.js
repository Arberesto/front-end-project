import {postSignIn} from "../../fetcher/fetcher";

import * as urls from '../urlAPI';

import * as types from './actionTypes';

export default function signIn(login, password) {
    return (dispatch) => {
        return postSignIn(
            urls.URL_SIGNIN,
            {
                username: login,
                password: password
            })
            .then(response => {
                localStorage.setItem('token', response.token);
                dispatch({
                    type: types.AUTHENTICATE_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.AUTHENTICATE_FAIL,
                    error: error
                })
            });
    }
}