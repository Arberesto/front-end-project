import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <nav>
                    <NavLink exact to="/" activeClassName="element_active" className="element__icon element__todo">Todo</NavLink>
                    <NavLink to="/done" activeClassName="element_active" className="element__icon element__done">Done</NavLink>
                </nav>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};