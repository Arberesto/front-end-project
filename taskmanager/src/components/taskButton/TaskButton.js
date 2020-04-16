import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class TaskButton extends React.Component {
    render() {
        const {onClick, className} = this.props;

        return (
            <button
                className={`task__button ${className}`}
                onClick={onClick}
            />
        );
    }
}

TaskButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};

TaskButton.defaultProps = {
    className: '',
    onClick: () => {
    }
};