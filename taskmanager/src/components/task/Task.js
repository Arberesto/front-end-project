import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import updateTask from "../../actions/taskList/updateTask";
import deleteTask from "../../actions/taskList/deleteTask";
import getTaskList from "../../actions/taskList/getTaskList";
import './style.css';

import TaskButton from '../task-button/TaskButton';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            disabledEdit: true,
            classButtonEdit: 'task__button_edit',
            typeButtonEdit: 'button'
        }
    }

    onClickEditTask = () => {
        alert(this.props.taskId);
    };

    onClickDeleteTask = (taskId, status) => {
        this.props.deleteTask(taskId)
            .then(() => {
                this.props.getTaskList(status);
            })
    };


    onClickFinishTask = () => {
        const body = {
            status: "done"
        };

        this.props.updateTask(this.props.taskId, body)
            .then(() => {
                this.props.getTaskList('inbox');
            });
    };

    onClickRestartTask = () => {
        const body = {
            status: "inbox"
        };

        this.props.updateTask(this.props.taskId, body)
            .then(() => {
                this.props.getTaskList('done');
            });
    };

    render() {
        return (
            <div className="task-box" id={this.props.taskId}>
                <TaskButton
                    onClick={() => this.onClickFinishTask(this.props.taskId)}
                    className={"task__button_status"}
                />
                <TaskButton
                    onClick={() => this.onClickRestartTask(this.props.taskId)}
                    className={"task__button_done"}
                />
                <p className="task-box__description">{this.props.text}</p>
                <div className={"task-box__action-buttons"}>
                    <TaskButton
                        onClick={() => this.onClickEditTask(this.props.taskId)}
                        className={this.state.classButtonEdit}
                    />
                    <TaskButton
                        onClick={() => this.onClickDeleteTask(this.props.taskId,this.props.status)}
                        className={"task__button_delete"}
                    />
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    taskId: PropTypes.string,
    status: PropTypes.string,
    text: PropTypes.string,
    disabledEdit: PropTypes.bool,
    updateTask: PropTypes.func,
    getTaskList: PropTypes.func,
    deleteTask: PropTypes.func
};

Task.defaultProps = {
    taskId: '',
    status: '',
    text: ''
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: bindActionCreators(deleteTask, dispatch),
    getTaskList: bindActionCreators(getTaskList, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch)
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);