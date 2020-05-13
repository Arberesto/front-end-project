import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';
import * as urls from '../urlAPI';

export default function getTaskList(status) {
    return (dispatch) => {
        return fetcher.get_authenticated(urls.URL_GET_TASK_LIST, status)
            .then(response => {
                dispatch({
                    type: types.GET_TASK_LIST_SUCCESS,
                    tasksList: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TASK_LIST_ERROR,
                    error: error
                });
            })
    }
}