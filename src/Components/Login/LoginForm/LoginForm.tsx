import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input } from '../../Common/FormsControls/FormsControls';
import { requiredField } from '../../../Utils/Validators/validators';
import styles from './../../Common/FormsControls/FormsControls.module.css'
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../Redux/ReduxStore';
import { GetStringKeys } from '../../../Redux/Reducers/ProfileReducer';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captchaUrl = useSelector<RootStateType, string | null>(state => state.authReducer.captchaUrl)

    return (
        <form onSubmit={handleSubmit}>
            {createField<GetStringKeys<FormDataType>>('Email', 'email', 'text', Input, [requiredField])}
            {createField<GetStringKeys<FormDataType>>('Password', 'password', 'password', Input, [requiredField])}
            {createField<GetStringKeys<FormDataType>>(null, 'rememberMe', 'checkbox', Input, [], 'Remember me')}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField<GetStringKeys<FormDataType>>('Symbols from captcha', 'captcha', 'text', Input, [requiredField])}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)