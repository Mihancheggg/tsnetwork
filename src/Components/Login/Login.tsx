import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm/LoginForm';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AuthStateType, loginThunkCreator, logoutThunkCreator} from '../../Redux/Reducers/AuthReducer';
import {Redirect} from 'react-router-dom';
import {AppPropsType} from '../../Redux/ReduxStore';

type LoginPropsType = MapDispatchPropsType & AuthStateType

const Login = (props: LoginPropsType) => {

    const onSubmit = (FormData: FormDataType) => {
        props.loginThunkCreator(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppPropsType): AuthStateType => {
    return {
        isAuth: state.authReducer.isAuth,
        userID: state.authReducer.userID,
        email: state.authReducer.email,
        login: state.authReducer.login,
        captchaUrl: state.authReducer.captchaUrl
    }
}

type MapDispatchPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha?: string) => void,
    logoutThunkCreator: () => void,
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        login: (email: string, password: string, rememberMe: boolean) => {
            dispatch(loginThunkCreator(email, password, rememberMe))
        },
        logout: ()=> {
            dispatch(logoutThunkCreator())
        }
    }
}*/

export const LoginContainer = compose<React.FC>(connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator}))(Login)