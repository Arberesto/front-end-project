import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';
import * as urls from '../urlAPI';

export default function getTaskList() {
    return (dispatch) => {
        return fetcher.getTaskList(urls.URL_GET_TASK_LIST, 'inbox')
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