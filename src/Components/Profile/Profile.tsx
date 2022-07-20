import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


export const Profile = (/*props: MyPostsContainerDataType*/) => {

    /*let myPostsData: Array<PostType> = [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 10},
        {id: v1(), message: 'It is my first post', likes: 15}
    ]*/

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPostsContainer //profilePage={props.profilePage} dispatch={props.dispatch}
            />
        </div>
    )
};