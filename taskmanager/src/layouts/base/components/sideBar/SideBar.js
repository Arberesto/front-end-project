import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Element from './components/Element/Element';
import TodoImage from './components/icons/todo_gray.png';
import DoneImage from './components/icons/done_gray.png';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <Element text="ToDo" img={TodoImage} />
                <Element text="Done" img={DoneImage} />
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};