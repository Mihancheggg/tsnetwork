import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {MapStateToPropsType} from './ProfileContainer';


export const Profile = (props: MapStateToPropsType) => {

    /*let myPostsData: Array<PostType> = [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 10},
        {id: v1(), message: 'It is my first post', likes: 15}
    ]*/
    console.log(props.profile)
    return (
        <div className={styles.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer //profilePage={props.profilePage} dispatch={props.dispatch}
            />
        </div>
    )
};