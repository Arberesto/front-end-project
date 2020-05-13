import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Task from "../../components/task/Task";
import SortButton from "../../components/sort-order-button/SortButton";
import createTask from "../../actions/taskList/createTask";
import getTaskList from "../../actions/taskList/getTaskList";

import './style.css';

class Done extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
            text: ''
        };
    }

    componentDidMount() {
        if (!this.props.authorized) {
            this.props.history.replace('/signin');
            return;
        }
        this.props.getTaskList('done');
    }

    componentDidUpdate(prevProps) {
        if (this.props.tasksList !== prevProps.tasksList) {
            this.setState({
                tasksList: this.props.tasksList
            });
        }
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
        ;
    };

    changeOrder = (event) => {
        alert("Order reversed");
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createTask({text: `${this.state.text}`})
            .then(() => {
                    this.props.getTaskList('done');
                }
            )
    };

    renderList = (tasksList) => {
        return tasksList.map((item, index) => {
            return (
                <Task
                    className='content_box'
                    key={index}
                    taskId={item.id}
                    text={item.text}
                    status={'done'}
                />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className={'done-page'}>
                    <div className='main__content-header'>
                        <SortButton onClick={this.changeOrder} value="Sort by done date"/>
                    </div>
                {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        );
    };
}

Done.propTypes = {
    createTask: PropTypes.func,
    getTaskList: PropTypes.func,
    tasksList: PropTypes.array,
    authorized: PropTypes.bool,
    history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    getTaskList: bindActionCreators(getTaskList, dispatch),
    createTask: bindActionCreators(createTask, dispatch)
});

const mapStateToProps = (state) => ({
    tasksList: state.getTaskListReducer.tasksList,
    authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);