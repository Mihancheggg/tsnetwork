import React from 'react';
import styles from './ProfileInfo.module.css';
import {MapStateToPropsType} from '../ProfileContainer';
import {Preloader} from '../../Common/Preloader/Preloader';

export const ProfileInfo = (props: MapStateToPropsType) => {

    if(!props.profile){
        return <Preloader/>
    } else {
        return (
            <div className={styles.profileInfo}>
                <div className={styles.content_image}>
                    <img
                        src="https://proprikol.ru/wp-content/uploads/2020/06/krasivye-kartinki-zakaty-27.jpg"
                        alt="Image from Internet"/>
                </div>
                <div className={styles.description}>
                    <img src={props.profile.photos? props.profile.photos.small : ''} alt="Profile photo"/>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>

        )
    }


}