import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../../components/Button/Button';

import './style.css';


export default class Form__Button extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Button onClick = {this.props.onClick}
                        className={`form__button${this.props.className ? ` ${this.props.className}` : ''}`}>
                    {this.props.text}
                </Button>
            </React.Fragment>
        );
    };

}