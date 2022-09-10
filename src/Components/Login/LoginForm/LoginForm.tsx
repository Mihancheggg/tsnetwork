import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../Common/FormsControls/FormsControls';
import {requiredField} from '../../../Utils/Validators/validators';
import styles from './../../Common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} type="text" placeholder={'Email'} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} type="password" placeholder={'Password'} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type="checkbox"/>Remember me
            </div>
            <div className={styles.formSummaryError}>ERROR</div>
            <div><button>Log in</button></div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)