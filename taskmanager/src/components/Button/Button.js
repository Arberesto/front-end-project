import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Button extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.onClick}
                        className={`button${this.props.className ? ` ${this.props.className}` : ''}`}
                        type = {this.props.type} disabled={this.props.disabled}>
                    {this.props.value}
                </button>
            </React.Fragment>
        );
    };
};

Button.propTypes = {
    onClick:PropTypes.func,
    type: PropTypes.string,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    value:PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    className:'',
    disabled: false,
    value: ''
};


