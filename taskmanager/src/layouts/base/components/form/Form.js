import React from 'react';

import FormButton from './components/form__button/Form__Button';

import './style.css';

export default class Form extends React.Component {

    handleOnClickPostNewTask = () => {alert("Task creation not supported yet")};
    render() {
        return (
          <React.Fragment>
              <form className='form'>
                  <input type="" className='form__input' placeholder='Type your new task'/>
                  <FormButton onClick={this.handleOnClickPostNewTask} className='form__button' text='Create'/>
              </form>
          </React.Fragment>
        );
    };
}

Form.propTypes = {

};