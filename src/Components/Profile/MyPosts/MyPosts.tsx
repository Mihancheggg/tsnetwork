import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {ProfilePagePropsType} from '../../../App';
import {
    ActionTypes, addPostActionCreator,
    AddPostActionType,
    updateNewPostTextActionCreator,
    UpdateNewPostTextActionType
} from '../../../Redux/Store';
import {action} from '@storybook/addon-actions';

export type MyPostsDataType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: MyPostsDataType) => {

    // let myPostsData: Array<PostType> = [
    //     {id: v1(), message: 'Hi, how are you?', likes: 22},
    //     {id: v1(), message: 'Very nice!', likes: 10},
    //     {id: v1(), message: 'It is my first post', likes: 15}
    // ]

    let postsElements = props.profilePage.myPostsData.map(item => <Post key={item.id} id={item.id}
                                                                        message={item.message}
                                                                        likes={item.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onTextAreaChangeHandler = () => {
        if (newPostElement.current) {
            let text = (newPostElement.current.value);
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onTextAreaChangeHandler} ref={newPostElement}
                               value={props.profilePage.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
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