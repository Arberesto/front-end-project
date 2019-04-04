import React from 'react';
import {NavLink} from 'react-router-dom';
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
                <nav>
                        <NavLink to="/" activeClassName="element_active">
                           <Element text="ToDo" img={TodoImage} />
                        </NavLink>
                        <NavLink to="/done" activeClassName="element_active">
                            <Element text="Done" img={DoneImage} />
                        </NavLink>
                </nav>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};