import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Button extends React.Component {
    render() {
        if (this.props.disabled) {
            return (
                <React.Fragment>
                    <button onClick={this.props.onClick}
                            className={`button${this.props.className ? ` ${this.props.className}` : ''}`}
                            disabled={"disabled"} value={`${this.props.text ? `${this.props.text}` : ``}`}>
                    </button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <button onClick={this.props.onClick}
                            className={`button${this.props.className ? ` ${this.props.className}` : ''}`}
                            value={`${this.props.text ? `${this.props.text}` : ``}`}>
                    </button>
                </React.Fragment>
            );
        }
    };
};

Button.propTypes = {
    onClick:PropTypes.func,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    text:PropTypes.string
};

Button.defaultProps = {
    className:'',
    text: '',
    disabled: ''
};


