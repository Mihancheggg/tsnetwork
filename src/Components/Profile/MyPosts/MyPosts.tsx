import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div>
                <Post message='Hi, how are you?' likes={22}/>
                <Post message='Very nice!' likes={10}/>
                <Post message='It is my first post' likes={15}/>
            </div>
        </div>
    )
}