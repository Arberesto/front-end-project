import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './style.css';
import ArticleTodo from "../article__todo/ArticleTodo";

export default class ArticleButton extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Button onClick={this.props.onClick}
                        className={`article__icon${this.props.className ? ` ${this.props.className}` : ''}`}/>
            </React.Fragment>
        );
    };
};

ArticleButton.propTypes = {
    onClick:PropTypes.node.isRequired,
    className:PropTypes.string
};

ArticleButton.defaultProps = {
    onClick: () => {alert("error: empty OnClick")},
    className:''
};
