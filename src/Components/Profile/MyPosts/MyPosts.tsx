import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {ProfilePagePropsType} from '../../../App';
import {MyPostsContainerDataType} from './MyPostsContainer';


export type MyPostsDataType = {
    //profilePage: ProfilePagePropsType
    myPostsData: Array<PostType>
    newPostText: string
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}

export const MyPosts = (props: MyPostsContainerDataType) => {

    let postsElements = props.myPostsData.map(item => <Post key={item.id} id={item.id}
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
                               value={props.newPostText}/></div>
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