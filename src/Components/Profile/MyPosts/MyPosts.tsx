import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {v1} from 'uuid';

type MyPostsDataType= {
    data: Array<PostType>
}

export const MyPosts = (props: MyPostsDataType) => {

    // let myPostsData: Array<PostType> = [
    //     {id: v1(), message: 'Hi, how are you?', likes: 22},
    //     {id: v1(), message: 'Very nice!', likes: 10},
    //     {id: v1(), message: 'It is my first post', likes: 15}
    // ]


    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div>
                {props.data.map(item => <Post id={item.id} message={item.message} likes={item.likes}/>)}
                {/*<Post message='Hi, how are you?' likes={22}/>*/}
                {/*<Post message='Very nice!' likes={10}/>*/}
                {/*<Post message='It is my first post' likes={15}/>*/}
            </div>
        </div>
    )
}