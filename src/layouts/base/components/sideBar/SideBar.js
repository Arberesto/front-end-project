import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {I18n} from 'react-redux-i18n';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <nav>
                    <ul className='side-bar__list'>
                        <li className='side-bar__item'>
                    <NavLink exact to="/todo" activeClassName="element-todo_active" className="element__icon element__todo">
                        {I18n.t('layout.sidebar.links.todo')}
                    </NavLink>
                        </li>
                        <li className='side-bar__item'>
                    <NavLink to="/done" activeClassName="element-done_active" className="element__icon element__done">
                        {I18n.t('layout.sidebar.links.done')}
                    </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};