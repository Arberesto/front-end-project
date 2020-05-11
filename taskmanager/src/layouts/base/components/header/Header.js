import React from 'react';

import './style.css';
import logo from './resources/logo.png';
import LogoutButton from "../../../../components/logout-button/LogoutButton";
import {bindActionCreators} from "redux";
import logout from "../../../../actions/user/logout";
import {connect} from "react-redux";

class Header extends React.Component {

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
                    <LogoutButton className="header__logout-button" onClick={this.props.logout}/>
                    </div>
                </div>
            </header>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logout,dispatch)
});

const mapStateToProps = (state) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header)