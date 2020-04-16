import React from 'react';
import PropTypes from "prop-types";

import './style.css';

export default class Form extends React.Component {
    render() {
        const {className, value, type, name, placeHolder, onChange, id, required, disabled} = this.props;
        return (
                  <input
                         className={`input ${className}`}
                         value={value}
                         type={type}
                         name={name}
                         placeholder={placeHolder}
                         onChange={onChange}
                         id={id}
                         required={required}
                         disabled={disabled}
                  />

        );
    };
};

Form.defaultProps = {
    className: '',
    type: 'text',
    name: '',
    placeHolder: '',
    onChange: () => {
    },
    id: '',
    required: false,
    disabled: false
};

Form.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
};


