import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../Common/FormsControls/FormsControls';
import {requiredField} from '../../../Utils/Validators/validators';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} type="text" placeholder={'Login'} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} type="text" placeholder={'Password'} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type="checkbox"/>Remember me
            </div>
            <div><button>Log in</button></div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)