import React from 'react';
import {withRouter} from 'react-router';
import ArticleToDo from '../../components/article__todo/ArticleTodo';

import list from './list';

import './style.css';
import Form from "../../layouts/base/components/form/Form";

class ToDo extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <ArticleToDo key={index} title={item.title} description={item.description} id={item.id} />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <Form/>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

export default withRouter(ToDo);