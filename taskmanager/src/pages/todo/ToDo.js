import React from 'react';
import {withRouter} from 'react-router';
import Task from '../../components/task/Task';
import Form from '../../components/form/Form';
import SubmitButton from "../../components/submitButton/SubmitButton";
import UploadButton from "../../components/uploadButton/UploadButton";

import list from './list';
import './style.css';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
            text: ''
        }
    }

    componentDidMount() {
        this.setState({
            tasksList: list.data
        });
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
        ;
    };


    onSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                text: '',
                tasksList: [{id: "some-id", text: this.state.text}, ...this.state.tasksList]
            },
            () => {
                list.data = this.state.tasksList;
            }
        );
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
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='main__content-header'>
                        <form className='form' onSubmit={this.onSubmit}>
                            <Form
                                value={this.state.text}
                                className="form__input"
                                placeHolder="Type your new task"
                                onChange={this.onChange}
                                id="form-field"
                                required={true}
                            />
                            <SubmitButton
                                className="form__button"
                                value="CREATE"
                                type="submit"
                                id="form-button"
                                disabled={!this.state.text}
                            />
                        </form>
                        <UploadButton
                            value="Upload CSV"
                            className="csv-upload-button"
                            activeClassName="upload-button_enabled"
                        />
                    </div>
                    {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        );
    };
}

export default withRouter(ToDo);