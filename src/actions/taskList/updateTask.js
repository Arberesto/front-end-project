import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';
import * as urls from '../urlAPI';

export default function updateTask(id, body) {
    return (dispatch) => {
        return fetcher.updateTask(urls.URL_UPDATE_TASK + id, body)
            .then(() => {
                dispatch({
                    type: types.UPDATE_TASK_SUCCESS,
                });
            })
            .catch(error => {
                dispatch({
                    type: types.UPDATE_TASK_ERROR,
                    error: error
                });
            })
    }
}