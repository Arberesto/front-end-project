import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


export default class Article extends React.Component {
    render() {
        return (
            <article className="article">
                <a href="#" className="article__link">
                    <div className="article__checkbox article__icon"></div>
                </a>
                <p className="article__description">{this.props.description}</p>
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

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Article.defaultProps = {
    title: '',
    description: ''
};