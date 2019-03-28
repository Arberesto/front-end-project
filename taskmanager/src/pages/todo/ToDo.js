import React from 'react';

import ArticleToDo from '../../components/article__todo/ArticleTodo';

import list from './list';

import './style.css';

export default class ToDo extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <ArticleToDo key={index} title={item.title} description={item.description} />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
};