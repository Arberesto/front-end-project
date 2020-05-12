import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';


import logo from './images/autho-logo.png';
import signup from '../../actions/user/signup';
import FormField from "../../components/formField/FormField";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit";
import './style.css';

class Signup extends React.Component {

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
                        this.props.history.replace('/login');
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
                    <FormField
                        className={`input login-form__input ${this.state.inputErr}`}
                        name='login'
                        type='text'
                        placeHolder='Email'
                        value={this.state.login}
                        onChange={this.handleChangeInLogin}
                    />
                    <FormField
                        className={`input login-form__input ${this.state.inputErr}`}
                        name='password'
                        placeHolder='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChangeInPassword}
                    />

                    <label className={"text-confirmation-block"}>
                        <FormField
                            className='input__check-signup'
                            type='checkbox'
                            disabled={!(this.state.password && this.state.login)}
                            onChange={this.handleChangeAgree}
                            required={true}
                        />
                        <p className={"input__check-text"}>I agree to processing of personal data</p>
                    </label>
                    <ButtonSubmit
                        className='button login-form__button-submit'
                        type='submit'
                        value='Sign up'
                        disabled={!(this.state.login && this.state.password && this.state.agree)}
                    />
                </form>
                <div className={"additional"}>
                    <p className={"additional__login_invitation"}>Already have an account?</p>
                    <a className={"additional__login_link"}
                       href={"/login"}>Log in</a>
                </div>
            </React.Fragment>
        );
    }
}

Signup.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(Signup)