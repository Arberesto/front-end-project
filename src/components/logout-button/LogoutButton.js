import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class LogoutButton extends React.Component {
    render() {
        const {onClick, className} = this.props;

        return (
            <button
                className={`logout-button ${className}`}
                onClick={onClick}
            />
        );
    }
}

LogoutButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};

LogoutButton.defaultProps = {
    className: '',
    onClick: () => {
    }
};