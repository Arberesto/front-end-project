import React from 'react';
import {withRouter} from 'react-router';
import ArticleDone from '../../components/article__done/ArticleDone';

import list from './list';

import './style.css';

class Done extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <ArticleDone key={index} title={item.title} description={item.description} />
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
}

export default withRouter(Done);