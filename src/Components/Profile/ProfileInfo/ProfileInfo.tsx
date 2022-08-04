import React from 'react';
import styles from './ProfileInfo.module.css';
import {MapStateToPropsType} from '../ProfileContainer';
import {Preloader} from '../../Common/Preloader/Preloader';

export const ProfileInfo = (props: MapStateToPropsType) => {

    if(!props.profile){
        return <Preloader/>
    } else {
        return (
            <div className={styles.profileinfo}>
                <div className={styles.content_image}>
                    <img
                        src="https://obustroeno.club/wp-content/uploads/2016/08/morskie-kamni-mogut-obladat-razlichnymi-ottenkami-chto-v-znachit-1024x640.jpg"
                        alt="It must be a lot of stones here"/>
                </div>
                <div className={styles.description}>
                    <img src={props.profile.photos? props.profile.photos.small : ''} alt="alt"/>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>

        )
    }


}