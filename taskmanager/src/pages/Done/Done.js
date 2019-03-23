import React from 'react';

import Article from '../../components/article/Article';

import list from './list';

import './style.css';

export default class Done extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <Article key={index} title={item.title} description={item.description} />
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