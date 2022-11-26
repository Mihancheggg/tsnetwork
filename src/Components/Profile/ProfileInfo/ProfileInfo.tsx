import React, { ChangeEvent, useState } from 'react';
import styles from './ProfileInfo.module.css';
import { Preloader } from '../../Common/Preloader/Preloader';
import { ProfilePropsType } from '../Profile';
import { ProfileStatusWithHooks } from './ProfileStatus/ProfileStatusWithHooks';
import user_image from '../../../Assets/Images/user_image.png';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataReduxForm } from './ProfileDataForm/ProfileDataForm';
import { ProfileFromServerPropsType } from '../../../Redux/Reducers/ProfileReducer';

export const ProfileInfo = (props: ProfilePropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            if (event.target.files.length) {
                props.setPhoto(event.target.files[0])
            }
        }
    }

    const onSubmit = (profile: ProfileFromServerPropsType) => {
        props.saveProfile(profile).then(() => {
            setEditMode(false)
        })
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={styles.profileInfo}>
                <div className={styles.content_image}>
                    {/*<img
                        src="https://proprikol.ru/wp-content/uploads/2020/06/krasivye-kartinki-zakaty-27.jpg"
                        alt="Random from Internet"/>*/}
                </div>
                <div className={styles.description}>
                    <img src={props.profile.photos.large || user_image} alt="Profile ava" className={styles.avatar}/>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                    {editMode
                        ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                       toEditMode={() => setEditMode(true)}/>

                    }

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>

        )
    }
}