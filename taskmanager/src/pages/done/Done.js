import React from 'react';
import {withRouter} from 'react-router';
import ArticleDone from '../../components/article__done/ArticleDone';

import list from './list';

import './style.css';
import Task from "../../components/task/Task";
import Form from "../../components/form/Form";
import SubmitButton from "../../components/submitButton/SubmitButton";
import UploadButton from "../../components/uploadButton/UploadButton";

class Done extends React.Component {

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
                    status={'done'}
                />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='main__content-header'>
                    </div>
                {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        );
    };
}

export default withRouter(Done);