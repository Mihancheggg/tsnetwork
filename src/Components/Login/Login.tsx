import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm/LoginForm';

export const Login = () => {

    const onSubmit = (FormData: FormDataType) =>{

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

