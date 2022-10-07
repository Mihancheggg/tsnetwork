import React from 'react';
import {createField, Input, Textarea} from '../../../Common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from '../../../Login/LoginForm/LoginForm';
import {ProfileFromServerPropsType} from '../../../../Redux/Reducers/ProfileReducer';

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFromServerPropsType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button type={'submit'}>Save</button>
            <div>
                <b>Full name:</b> {createField('Full name', 'fullName', 'text', Input, [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('', 'lookingForAJob', 'checkbox', Input, [])}
            </div>
            <div>
                <b>My professional
                    skills: </b> {createField('My professional skills', 'lookingForAJobDescription', '', Textarea, [])}
            </div>
            <div>
                <b>About me: </b> {createField('About me', 'aboutMe', '', Textarea, [])}
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileFromServerPropsType>({form: 'editProfile'})(ProfileDataForm)