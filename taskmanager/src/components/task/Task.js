import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import updateTask from "../../actions/taskList/updateTask";
import deleteTask from "../../actions/taskList/deleteTask";
import './style.css';

import TaskButton from '../task-button/TaskButton';

export default class Task extends React.Component {
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
        alert(this.props.taskId);
    };

    onClickDoneTask = () => {
        alert(this.props.taskId);
    };

    render() {
        return (
            <div className="task-box" id={this.props.taskId}>
                <TaskButton
                    onClick={() => this.onClickFinishTask(this.props.taskId)}
                    className={"task__button_status"}
                />
                <TaskButton
                    onClick={() => this.onClickDoneTask(this.props.taskId)}
                    className={"task__button_done"}
                />
                <p className="task-box__description">{this.props.text}</p>
                <div className={"task-box__action-buttons"}>
                    <TaskButton
                        onClick={() => this.onClickEditTask(this.props.taskId)}
                        className={this.state.classButtonEdit}
                    />
                    <TaskButton
                        onClick={() => this.onClickDeleteTask(this.props.taskId)}
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
    disabledEdit: PropTypes.bool
};

Task.defaultProps = {
    taskId: '',
    status: '',
    text: '',
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: bindActionCreators(deleteTask, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch)
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);