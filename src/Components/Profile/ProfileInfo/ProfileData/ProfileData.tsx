import React from 'react';
import {ProfileFromServerPropsType} from '../../../../Redux/Reducers/ProfileReducer';
import {Contact} from './Contact/Contact';
import styles from '../ProfileInfo.module.css';

type ProfileDataPropsType = {
    profile: ProfileFromServerPropsType
    isOwner: boolean
    toEditMode: () => void
}

export const ProfileData = ({profile, isOwner, toEditMode}:ProfileDataPropsType) => {
    return (
        <div>
            {isOwner && <button onClick={toEditMode} type={'button'}>Edit</button>}
            <div>
                {profile.fullName}
            </div>
            <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
                <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>}
            <div><b>About me: </b>{profile.aboutMe}</div>
            <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact className={styles.contact} key={key} title={key} value={profile?.contacts[key]}/>
            })}</div>
        </div>
    );
};