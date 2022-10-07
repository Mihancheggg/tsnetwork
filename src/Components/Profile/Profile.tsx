import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MapStateToPropsType} from './ProfileContainer';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileFromServerPropsType} from '../../Redux/Reducers/ProfileReducer';

export type AdditionalProfilePropsType = {
    updateStatus: (status: string) => void,
    isOwner: boolean,
    setPhoto: (photo: File) => void
    saveProfile: (profile: ProfileFromServerPropsType) => void
}

export type ProfilePropsType = MapStateToPropsType & AdditionalProfilePropsType


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo saveProfile={props.saveProfile} setPhoto={props.setPhoto} authed={props.authed} status={props.status} profile={props.profile}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}/>
            {/*<MyPostsContainer //profilePage={props.profilePage} dispatch={props.dispatch}
            />*/}
            <MyPosts/>
        </div>
    )
};