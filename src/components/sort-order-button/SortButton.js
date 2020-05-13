import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SortButton extends React.Component {
    render() {
        const {onClick, className, value} = this.props;
        return (
            <button
                className={`sort-order-button ${className}`}
                onClick={onClick}
            >
                {value}
            </button>
        );
    }
}

SortButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string
};

SortButton.defaultProps = {
    onClick: () => {
    },
    className: '',
    disabled: false,
    value: ''
};