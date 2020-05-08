import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';
import * as urls from '../urlAPI';

export default function createTask(task) {
    return (dispatch) => {
        return fetcher.deleteTask(urls.URL_DELETE_TASK, task)
            .then(response => {
                dispatch({
                    type: types.DELETE_TASK_SUCCESS,
                    tasksList: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.DELETE_TASK_ERROR,
                    error: error
                });
            })
    }
}