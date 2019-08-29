import React from 'react';
import {withRouter} from 'react-router';
import ArticleToDo from '../../components/article__todo/ArticleTodo';

import list from './list';

import './style.css';
import Form from "../../layouts/base/components/form/Form";

class ToDo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list: list['data']
        }
    }

    onSubmit = (newList) => {
        this.setState({list: newList},
            () => {
            list.data = this.state.list;
        });
    }

    renderList = () => {
        return this.state.list.map((item, index) => {
            return (
                <ArticleToDo key={index} id={item.id} title={item.title} description={item.description}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <Form onSubmitFrom={this.onSubmit} list = {this.state.list}/>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

export default withRouter(ToDo);