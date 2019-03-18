import React from 'react';

import './style.css';
import logo from './resources/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img src = {logo} alt="Else Tasks">
                        </img>
                    </a>
                </div>
            </header>
        );
    };
};