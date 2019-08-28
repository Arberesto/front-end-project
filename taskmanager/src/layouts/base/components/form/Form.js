import React from 'react';

import FormButton from './components/form__button/Form__Button';

import './style.css';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTask(event){
        this.setState({task: event.target.value});
    }

    onSubmit(event){
        alert(this.state.task);
    }

    handleOnClickPostNewTask = () => {
        //alert("Task creation not supported yet")
    };


    render() {
        return (
          <React.Fragment>
              <form onSubmit={this.onSubmit} className='form'>
                  <input type="text" className='form__input' value={this.state.task}
                         onChange={this.onChangeTask} placeholder='Type your new task'/>
                  <FormButton onClick={this.handleOnClickPostNewTask} className='form__button' text='Create'/>
              </form>
          </React.Fragment>
        );
    };
}

Form.propTypes = {

};