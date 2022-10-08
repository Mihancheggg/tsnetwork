import React from 'react';
import {createField, Input, Textarea} from '../../../Common/FormsControls/FormsControls';
import {getFormInitialValues, InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from '../../../Login/LoginForm/LoginForm';
import {ProfileFromServerPropsType} from '../../../../Redux/Reducers/ProfileReducer';
import styles from './ProfileDataForm.module.css'
import {Contact} from '../ProfileData/Contact/Contact';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../../../Redux/ReduxStore';
import style from './../../../Common/FormsControls/FormsControls.module.css'

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFromServerPropsType>> = ({handleSubmit, error}) => {

    const contacts = useSelector<RootStateType, any>(state => state.profileReducer.profile?.contacts)

    return (
        <form onSubmit={handleSubmit}>
            <button type={'submit'}>Save</button>
            {error && <div className={style.formSummaryError}>{error}</div>}
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
            <div>
                <b>Contacts: </b> {Object.keys(contacts).map(key => {
                return <div key={key} className={styles.contact}>
                    <b>{key.valueOf() + ':'}</b>
                    {createField(key, 'contacts.' + key, '', Input, [])}
                </div>
            })}
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileFromServerPropsType>({form: 'editProfile'})(ProfileDataForm)