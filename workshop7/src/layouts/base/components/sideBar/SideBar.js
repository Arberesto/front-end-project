import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <h1 className='side-bar__title'>Боковое меню</h1>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: 'toDo'
};