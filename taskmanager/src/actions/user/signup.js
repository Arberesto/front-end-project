import {postSignUp} from "../../fetcher/fetcher";

import * as urls from '../urlAPI';

import * as types from './actionTypes';

export default function signUp(login, password) {
    return (dispatch) => {
        return postSignUp(
            urls.URL_SIGNUP,
            {
                username: login,
                password: password
            })
            .then(response => {
                dispatch({
                    type: types.CREATE_USER_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.CREATE_USER_FAIL,
                    error: error
                })
            });
    }
}