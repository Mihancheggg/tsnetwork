import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {ProfilePagePropsType} from '../../../App';

export type MyPostsDataType= {
    profilePage: ProfilePagePropsType
    addPost: (message: string) => void
}

export const MyPosts = (props: MyPostsDataType) => {

    // let myPostsData: Array<PostType> = [
    //     {id: v1(), message: 'Hi, how are you?', likes: 22},
    //     {id: v1(), message: 'Very nice!', likes: 10},
    //     {id: v1(), message: 'It is my first post', likes: 15}
    // ]

    let postsElements = props.profilePage.myPostsData.map(item => <Post id={item.id} message={item.message} likes={item.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();



    let addPost = () => {
        if(newPostElement.current){
            let text = (newPostElement.current.value);
            props.addPost(text)
            newPostElement.current.value = '';
        }
    }

    let onTextAreaChangeHandler = () => {

    }

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onTextAreaChangeHandler} ref={newPostElement} value={props.profilePage.newPostText}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div>
                {postsElements}
                {/*<Post message='Hi, how are you?' likes={22}/>*/}
                {/*<Post message='Very nice!' likes={10}/>*/}
                {/*<Post message='It is my first post' likes={15}/>*/}
            </div>
        </div>
    )
}