import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Button extends React.Component {
    render() {
        return(
            <React.Fragment>
            <button onClick = {this.props.onClick}
                    className={`article__icon${this.props.className ? ` ${this.props.className}` : ''}`}/>
            </React.Fragment>
            );
    };
};

Button.propTypes = {
    onClick:PropTypes.node.isRequired,
    className:PropTypes.string
};
