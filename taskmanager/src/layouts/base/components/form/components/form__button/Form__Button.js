import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../../components/Button/Button';

import './style.css';
import ArticleButton from "../../../../../../components/Article__Button/ArticleButton";


export default class Form__Button extends React.Component {

    render() {
        return (
            <React.Fragment>
                <label>
                <Button onClick = {this.props.onClick}
                        className={`form__button${this.props.className ? ` ${this.props.className}` : ''}`} type={this.props.type} disabled={this.props.disabled} value = {this.props.value}>
                <ArticleButton className ={'form__icon'} disabled={true}/>
                </Button>
                </label>
            </React.Fragment>
        );
    };
};

Form__Button.propTypes = {
    onClick:PropTypes.func,
    type: PropTypes.string,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    value:PropTypes.string
};
