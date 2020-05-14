import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {I18n} from 'react-redux-i18n';

import Task from '../../components/task/Task';
import FormInput from '../../components/form-input/formInput';
import SubmitButton from "../../components/submit-button/SubmitButton";
import UploadButton from "../../components/upload-button/UploadButton";
import SortButton from "../../components/sort-order-button/SortButton";

import createTask from "../../actions/taskList/createTask";
import getTaskList from "../../actions/taskList/getTaskList";

import './style.css';

class ToDo extends React.Component {

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
        this.props.getTaskList('inbox');
    }

    componentDidUpdate(prevProps) {
        if (this.props.tasksList !== prevProps.tasksList) {
            this.setState({
                tasksList: this.props.tasksList
            })
        }
    }


    onChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };


    onSubmit = (event) => {
        event.preventDefault();
        this.props.createTask({text: `${this.state.text}`})
            .then(() => {
                    this.props.getTaskList('inbox');
                    this.setState({
                     text: ''
                    });
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
                    status={'inbox'}
                />
            )
        })
    };


    upload = () => {
        alert("Upload");
    };

    changeOrder = () => {
        alert("Order reversed");
    };

    render() {
        return (
            <React.Fragment>
                <div className={'todo-page'}>
                    <div className='main__content-header'>
                        <form className='form' onSubmit={this.onSubmit}>
                            <FormInput
                                value={this.state.text}
                                className="form__input"
                                placeHolder={I18n.t('layout.todo.form.formText')}
                                onChange={this.onChange}
                                id="form-field"
                                required={true}
                            />
                            <SubmitButton
                                className="form__button"
                                value={I18n.t('layout.todo.form.buttonText')}
                                type="submit"
                                id="form-button"
                                disabled={!this.state.text}
                            />
                        </form>
                        <UploadButton
                            value={I18n.t('layout.todo.buttons.uploadButton')}
                            onClick={this.upload}
                            className="csv-upload-button"
                        />
                        <SortButton onClick={this.changeOrder} value={I18n.t('layout.todo.buttons.sortButton')}/>
                    </div>
                    {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        )
    }

}

ToDo.propTypes = {
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
    tasksList: state.TaskListReducer.tasksList,
    authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)