import React from 'react';
import styles from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';
import {v1} from 'uuid';

export const Profile = () => {

    let myPostsData: Array<PostType> = [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 10},
        {id: v1(), message: 'It is my first post', likes: 15}
    ]

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts data={myPostsData}/>
        </div>
    )
};