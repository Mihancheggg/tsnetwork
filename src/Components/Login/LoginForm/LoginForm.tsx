import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../Common/FormsControls/FormsControls';
import {requiredField} from '../../../Utils/Validators/validators';
import styles from './../../Common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', 'text', Input, [requiredField])}
            {createField('Password', 'password', 'password', Input, [requiredField])}
            {createField(null, 'rememberMe', 'checkbox', Input, [],'Remember me')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)