import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import './style.css';
import logo from './images/autho-logo.png';

import signIn from '../../actions/user/signin';

import FormInput from "../../components/form-input/formInput";
import SubmitButton from "../../components/submit-button/SubmitButton";


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            inputErr: ''
        }
    }


    componentDidMount() {
        if (this.props.authorized) {
            this.props.history.replace('/todo');
        }
    }

    componentDidUpdate() {
        if (this.props.authorized) {
            this.props.history.replace('/todo');
        }
    }

    handleChangeInLogin = (event) => {
        this.setState({
            username: event.target.value,
            inputErr: ''
        });
    };

    handleChangeInPassword = (event) => {
        this.setState({
            password: event.target.value,
            inputErr: ''
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target['username'].value;
        const password = event.target['password'].value;

        this.props.login(username, password)
            .then(() => {
                if (this.props.authorized) {
                    this.setState({
                        inputErr: ''
                    })
                } else {
                    this.setState({
                        inputErr: 'input-error'
                    })
                }
            })
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className='login-form'
                    onSubmit={this.handleSubmit}
                >
                    <img className={"login__logo"} alt="app_logo" src={logo}/>
                    <FormInput
                        className={`input login-form__input ${this.state.inputErr}`}
                        type={"email"}
                        name='login'
                        placeHolder='Email'
                        value={this.state.login}
                        onChange={this.handleChangeInLogin}
                    />
                    <FormInput
                        className={`input login-form__input ${this.state.inputErr}`}
                        name='password'
                        placeHolder= 'Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChangeInPassword}
                    />
                    <SubmitButton
                        className='button login-form__button-submit'
                        type='submit'
                        value='Log in'
                        disabled={!(this.state.login && this.state.password)}
                    />
                </form>
                <div className={"additional"}>
                    <p className={"additional__signup_invitation"}>Don't have an account?</p>
                    <a className={"additional__signup_link"}
                       href={"/signup"}>Sign up</a>
                </div>
            </React.Fragment>
        )
            ;
    }
}

Login.propTypes = {
    authorized: PropTypes.bool,
    login: PropTypes.func,
    history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(signIn, dispatch)
});

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized
});


export default connect(mapStateToProps, mapDispatchToProps)(Login)