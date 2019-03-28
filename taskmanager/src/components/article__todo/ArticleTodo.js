import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Article from '../article/Article';


export default class ArticleTodo extends React.Component {
    render() {
        return (
            <article className="article">
                <a href="#" className="article__link">
                    <div className="article__checkbox article__icon"></div>
                </a>
                <Article description={this.props.description} title={this.props.title}/>
                <a href="#" className="article__link">
                    <div className="article__pencil article__icon"></div>
                </a>
                <a href="#" className="article__link">
                    <div className="article__trash article__icon"></div>
                </a>
            </article>
        );
    };
};

ArticleTodo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

ArticleTodo.defaultProps = {
    title: '',
    description: ''
};