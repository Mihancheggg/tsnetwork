import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {MyPostsContainerDataType} from './MyPostsContainer';
import {FormDataType, NewPostReduxForm} from './NewPostForm/NewPostForm';


export type MyPostsDataType = {
    //profilePage: ProfilePagePropsType
    myPostsData: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: MyPostsContainerDataType) => {

    let postsElements = props.myPostsData.map(item => <Post key={item.id} id={item.id}
                                                            message={item.message}
                                                            likes={item.likes}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    const addPost = (values: FormDataType) => {
        props.addPost(values.newPost)
        //props.dispatch(addPostActionCreator())
    }

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                {/*<div><textarea onChange={onTextAreaChangeHandler} ref={newPostElement}
                               value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>*/}
                <NewPostReduxForm onSubmit={addPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}