import React from 'react';
import {LoginReduxForm} from './LoginForm/LoginForm';

export const Login = () => {

    const onSubmit = (FormData: any) =>{

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

