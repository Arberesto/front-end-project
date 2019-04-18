import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Article from '../article/Article';
import Button from '../Button/Button';


export default class ArticleTodo extends React.Component {

    handleOnClickPencil = () => {alert(this.props.id)};

    handleOnClickTrash = () => {alert(this.props.id)};

    handleOnClickCheckbox = () => {alert(this.props.id)};

        render() {
        return (
            <article className="article">
                <Button onClick={this.handleOnClickCheckbox} className="article__checkbox"/>
                <Article description={this.props.description} title={this.props.title}/>
                <Button onClick={this.handleOnClickPencil} className="article__pencil"/>
                <Button onClick={this.handleOnClickTrash} className="article__trash"/>
            </article>
        );
    };
};
ArticleTodo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

ArticleTodo.defaultProps = {
    id: '',
    title: '',
    description: ''
};