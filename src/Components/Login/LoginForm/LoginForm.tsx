import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'login'} component={'input'} type="text" placeholder={'Login'}/></div>
            <div><Field name={'password'} component={'input'} type="text" placeholder={'Password'}/></div>
            <div><Field name={'rememberMe'} component={'input'} type="checkbox"/>Remember me</div>
            <div><button>Log in</button></div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)