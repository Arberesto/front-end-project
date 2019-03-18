import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <p className='side-bar__element'>To Do</p>
                <p className='side-bar__element'>Done</p>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};