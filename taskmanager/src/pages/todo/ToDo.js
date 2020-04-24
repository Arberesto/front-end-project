import React from 'react';
import {connect} from 'react-redux';
import Task from '../../components/task/Task';
import FormInput from '../../components/form-input/formInput';
import SubmitButton from "../../components/submit-button/SubmitButton";
import UploadButton from "../../components/upload-button/UploadButton";

import list from './list';
import './style.css';
import SortButton from "../../components/sort-order-button/SortButton";

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


    upload = (event) => {
      alert("Upload");
    };

    changeOrder = (event) => {
        alert("Order reversed");
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
                <div className={'todo-page'}>
                    <div className='main__content-header'>
                        <form className='form' onSubmit={this.onSubmit}>
                            <FormInput
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
                            onClick={this.upload}
                            className="csv-upload-button"
                        />
                        <SortButton onClick={this.changeOrder} value="Sort by creation date"/>
                    </div>
                    {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);;