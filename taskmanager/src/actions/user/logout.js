import * as types from './actionTypes';
import {getLogout, JWT} from "../../fetcher/fetcher";
import * as urls from "../urlAPI";

//TODO: add backend part (nullify token)

export default function logout() {
    return (dispatch) => {
        return getLogout(
            urls.URL_LOGOUT)
            .then((response) => {
                localStorage.removeItem(JWT);
                //localStorage.clear();
                dispatch({
                    type: types.LOGOUT_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.LOGOUT_FAIL,
                    error: error
                })
            });
    }
}