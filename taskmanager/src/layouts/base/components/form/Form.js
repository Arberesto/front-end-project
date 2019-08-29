import React from 'react';

import FormButton from './components/form__button/Form__Button';

import './style.css';
import PropTypes from "prop-types";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {task: '', buttonIs:'form__button_disabled'};
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTask(event){
        this.setState({task: event.target.value},
            () => {
            if (this.state.task === '') {
                this.setState({buttonIs: 'form__button_disabled'});
            } else {
                this.setState({buttonIs: ''});
            }
        });
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmitFrom([
            {
            "id": "231-2323-32-67-44",
            "title": `Title ${this.props.list.length}`,
            "description":  this.state.task
            }, ...this.props.list]);
        this.setState({task: ''});
    }

    render() {
        return (
          <React.Fragment>
              <form onSubmit={this.onSubmit} className='form'>
                  <input type="text" className='form__input' value={this.state.task}
                         onChange={this.onChangeTask} placeholder='Type your new task'/>
                  <FormButton onClick={this.onSubmit} className={`${this.state.buttonIs}`} text='Create'/>
              </form>
          </React.Fragment>
        );
    };
}

Form.propTypes = {
    onSubmitFrom: PropTypes.node.isRequired,
    list: PropTypes.node.isRequired
}
