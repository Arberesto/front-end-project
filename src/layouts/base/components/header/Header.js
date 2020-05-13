import React from 'react';

import LogoutButton from "../../../../components/logout-button/LogoutButton";

import logo from './resources/logo.png';
import './style.css';

export default class Header extends React.Component {

    logoutOnClick() {
        alert('logout')
    }

        render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img src = {logo} alt="Else Tasks">
                        </img>
                    </a>
                    <div className="header__right-corner">
                    <p className="header__username">Johny</p>
                    <LogoutButton className="header__logout-button" onClick={this.logoutOnClick}/>
                    </div>
                </div>
            </header>
        );
    };
};
