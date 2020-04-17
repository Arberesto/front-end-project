import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class UploadButton extends React.Component {
    render() {
        const {onClick, className, disabled, value} = this.props;
        return (
            <button
                className={`upload-button ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {value}
            </button>
        );
    }
}

UploadButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string
};

UploadButton.defaultProps = {
    onClick: () => {
    },
    className: '',
    disabled: false,
    value: ''
};