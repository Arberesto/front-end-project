import React from 'react';

import './style.css';
import logo from './resources/logo.png';
import LogoutButton from "../../../../components/logout-button/LogoutButton";

export default class Header extends React.Component {

    onClick =  (event) => {
        alert("logout");
    };

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
                    <LogoutButton className="header__logout-button" onClick={this.onClick}/>
                    </div>
                </div>
            </header>
        );
    };
};