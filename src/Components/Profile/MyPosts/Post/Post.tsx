import React from 'react';
import styles from './Post.module.css'

export type PostType = {
    id: string;
    message: string;
    likes: number;
}

export const Post: React.FC<PostType> = (props) => { //same as props:PostType
    return (
        <div className={styles.post}>
            <img src="https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg" alt=""/>
            <span>{props.message}</span>
            <div>Likes: {props.likes}</div>
        </div>
    )
}