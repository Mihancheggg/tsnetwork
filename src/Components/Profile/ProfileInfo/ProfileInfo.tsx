import React from 'react';
import styles from './ProfileInfo.module.css';
import {Preloader} from '../../Common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfilePropsType} from '../Profile';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';

export const ProfileInfo = (props: ProfilePropsType) => {

    if(!props.profile){
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
                    <img src={props.profile.photos? props.profile.photos.small : ''} alt="Profile ava"/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>

        )
    }


}