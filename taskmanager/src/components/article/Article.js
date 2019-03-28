import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


export default class Article extends React.Component {
    render() {
        return (
                <p className="article__description">{this.props.description}</p>
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