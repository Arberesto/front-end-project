import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Element extends React.Component {
    render() {
        return (
            <div className="element">
                <img src={this.props.img} className="element__icon"></img>
                <p className="element__text">{this.props.text}</p>
            </div>
        );
    };
};

Element.propTypes = {
    text: PropTypes.string,
    img: PropTypes.node. isRequired
};