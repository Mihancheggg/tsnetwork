import React from 'react';
import { createField, Input, Textarea } from '../../../Common/FormsControls/FormsControls';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { GetStringKeys, ProfileFromServerPropsType } from '../../../../Redux/Reducers/ProfileReducer';
import styles from './ProfileDataForm.module.css'
import style from './../../../Common/FormsControls/FormsControls.module.css'

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFromServerPropsType>> = ({
                                                                                             initialValues,
                                                                                             handleSubmit,
                                                                                             error
                                                                                         }) => {

    // const contacts = useSelector<RootStateType, any>(state => state.profileReducer.profile?.contacts) alternative way to get contacts

    return (
        <form onSubmit={handleSubmit}>
            <button type={'submit'}>Save</button>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <b>Full
                    name:</b> {createField<GetStringKeys<ProfileFromServerPropsType>>('Full name', 'fullName', 'text', Input, [])}
            </div>
            <div>
                <b>Looking for a
                    job: </b>{createField<GetStringKeys<ProfileFromServerPropsType>>('', 'lookingForAJob', 'checkbox', Input, [])}
            </div>
            <div>
                <b>My professional
                    skills: </b> {createField<GetStringKeys<ProfileFromServerPropsType>>('My professional skills', 'lookingForAJobDescription', '', Textarea, [])}
            </div>
            <div>
                <b>About
                    me: </b> {createField<GetStringKeys<ProfileFromServerPropsType>>('About me', 'aboutMe', '', Textarea, [])}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(initialValues.contacts || {}).map(key => {
                return <div key={key} className={styles.contact}>
                    <b>{key.valueOf() + ':'}</b>
                    {createField<GetStringKeys<any>>(key, 'contacts.' + key, '', Input, [])}
                </div>
            })}
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileFromServerPropsType>({form: 'editProfile'})(ProfileDataForm)