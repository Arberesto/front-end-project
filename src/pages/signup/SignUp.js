import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {I18n} from 'react-redux-i18n';

import signup from '../../actions/user/signup';
import FormInput from "../../components/form-input/formInput";
import SubmitButton from "../../components/submit-button/SubmitButton";

import logo from './images/autho-logo.png';
import './style.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            agree: '',
            registered: false,
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
            login: event.target.value,
            inputErr: ''
        });
    };

    handleChangeInPassword = (event) => {
        this.setState({
            password: event.target.value,
            inputErr: ''
        });
    };

    handleChangeAgree = (event) => {
        this.setState({
            agree: event.target.checked,
            inputErr: ''
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target['login'].value;
        const password = event.target['password'].value;

        this.props.signup(username, password)
            .then(() => {
                    if (this.props.registered) {
                        this.setState({
                            inputErr: '',
                            registered: false
                        });
                        this.props.history.replace('/signin');
                    } else {
                        this.setState({
                            inputErr: 'input-error'
                        });
                    }
                }
            )
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className='signup-form'
                    onSubmit={this.handleSubmit}
                >
                    <img className={"signup__logo"} alt="app_logo" src={logo}/>
                    <FormInput
                        className={`input login-form__input ${this.state.inputErr}`}
                        name='login'
                        type='text'
                        placeHolder={I18n.t('layout.signup.form.placeholder.email')}
                        value={this.state.login}
                        onChange={this.handleChangeInLogin}
                    />
                    <FormInput
                        className={`input login-form__input ${this.state.inputErr}`}
                        name='password'
                        placeHolder={I18n.t('layout.signup.form.placeholder.password')}
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChangeInPassword}
                    />

                    <label className={"text-confirmation-block"}>
                        <FormInput
                            className='input__check-signup'
                            type='checkbox'
                            disabled={!(this.state.password && this.state.login)}
                            onChange={this.handleChangeAgree}
                            required={true}
                        />
                        <p className={"input__check-text"}>{I18n.t('layout.signup.form.text.agree')}</p>
                    </label>
                    <SubmitButton
                        className='button login-form__button-submit'
                        type='submit'
                        value={I18n.t('layout.signup.form.button.text')}
                        disabled={!(this.state.login && this.state.password && this.state.agree)}
                    />
                </form>
                <div className={"additional"}>
                    <p className={"additional__login_invitation"}>{I18n.t('layout.signup.additionalText.haveAccount')}</p>
                    <a className={"additional__login_link"}
                       href={"/signin"}>{I18n.t('layout.signup.additionalText.signin')}</a>
                </div>
            </React.Fragment>
        );
    }
}

SignUp.propTypes = {
    authorized: PropTypes.bool,
    signup: PropTypes.func,
    registered: PropTypes.bool,
    history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    signup: bindActionCreators(signup, dispatch)
});

const mapStateToProps = (state) => ({
    authorized: state.userReducer.authorized,
    registered: state.userReducer.registered
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)