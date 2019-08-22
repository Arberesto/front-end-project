import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Button extends React.Component {
    render() {
        return(
            <React.Fragment>
            <button onClick = {this.props.onClick}
                    className={`button${this.props.className ? ` ${this.props.className}` : ''}`}>
            </button>
            </React.Fragment>
            );
    };
};

Button.propTypes = {
    onClick:PropTypes.node.isRequired,
    className:PropTypes.string,
    text:PropTypes.string
};

Button.defaultProps = {
    className:'',
    text: ''
};


