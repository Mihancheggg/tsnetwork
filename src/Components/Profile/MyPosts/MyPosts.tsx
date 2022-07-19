import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePagePropsType} from '../../../App';


export type MyPostsDataType = {
    profilePage: ProfilePagePropsType
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}

export const MyPosts = (props: MyPostsDataType) => {

    let postsElements = props.profilePage.myPostsData.map(item => <Post key={item.id} id={item.id}
                                                                        message={item.message}
                                                                        likes={item.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
        //props.dispatch(addPostActionCreator())
    }

    let onTextAreaChangeHandler = () => {
        if (newPostElement.current) {
            let text = (newPostElement.current.value);
            props.updateNewPostText(text)
            //props.dispatch(updateNewPostTextActionCreator(text))
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
            </div>
        </div>
    )
}