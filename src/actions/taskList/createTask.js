import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';
import * as urls from '../urlAPI';

export default function createTask(task) {
    return (dispatch) => {
        return fetcher.createTask(urls.URL_GET_TASK, task)
            .then(response => {
                dispatch({
                    type: types.CREATE_TASK_SUCCESS,
                    tasksList: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.CREATE_TASK_ERROR,
                    error: error
                });
            })
    }
}