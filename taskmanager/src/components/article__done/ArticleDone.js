import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Article from '../article/Article';

export default class ArticleDone extends React.Component {
    render() {
        return (
            <article className="article">
                <a href="#" className="article__link">
                    <div className="article__galka article__icon"></div>
                </a>
                <Article description={this.props.description} title={this.props.title}/>
                <a href="#" className="article__link">
                    <div className="article__trash article__icon"></div>
                </a>
            </article>
        );
    };
};

ArticleDone.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

ArticleDone.defaultProps = {
    title: '',
    description: ''
};