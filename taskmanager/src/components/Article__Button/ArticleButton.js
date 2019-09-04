import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './style.css';
import ArticleTodo from "../article__todo/ArticleTodo";

export default class ArticleButton extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Button onClick={this.props.onClick} type={this.props.type}
                        className={`article__icon${this.props.className ? ` ${this.props.className}` : ''}`}
                        disabled={this.props.disabled} value={this.props.value}/>
            </React.Fragment>
        );
    };
};

ArticleButton.propTypes = {
    onClick:PropTypes.func,
    type: PropTypes.string,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    value:PropTypes.string
};
