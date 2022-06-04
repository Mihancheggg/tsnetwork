import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            Posts
            <div>
                New post
            </div>
            <div>
                <Post message='Hi, how are you?' likes={22}/>
                <Post message='Very nice!' likes={10}/>
                <Post message='It is my first post' likes={15}/>
            </div>
        </div>
    )
}