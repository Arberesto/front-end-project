import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Article from '../article/Article';
import Button from "../Button/Button";

export default class ArticleDone extends React.Component {

    handleOnClickGalka = () => {alert(this.props.id)};
    handleOnClickTrash = () => {alert(this.props.id)};

    render() {
        return (
            <article className="article">
                <Button onClick={this.handleOnClickGalka} className='article__galka'/>
                <Article description={this.props.description} title={this.props.title}/>
                <Button onClick={this.handleOnClickTrash} className='article__trash'/>
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