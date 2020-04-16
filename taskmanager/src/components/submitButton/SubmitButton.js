import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SubmitButton extends React.Component {
    render() {
        const {className, value, type, disabled} = this.props;

        return (
            <button
                className={`button ${className}`}
                type={type}
                disabled={disabled}
            >
                {value}
            </button>
        );
    }
}

SubmitButton.defaultProps = {
    className: '',
    type: 'text',
    name: '',
    disabled: false,
};

SubmitButton.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
};