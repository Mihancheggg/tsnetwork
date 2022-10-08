import React from 'react';
import styles from './MyPosts.module.css'
import {Post, PostType} from './Post/Post';
import {FormDataType, NewPostReduxForm} from './NewPostForm/NewPostForm';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../../Redux/ReduxStore';
import {addPostActionCreator} from '../../../Redux/Reducers/ProfileReducer';


export type MyPostsDataType = {
    //profilePage: ProfilePagePropsType
    myPostsData: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = React.memo(() => {

    const dispatch = useDispatch()
    const myPostsData = useSelector<RootStateType,Array<PostType>>(state => state.profileReducer.myPostsData)

    let postsElements = myPostsData.map(item => <Post key={item.id} id={item.id}
                                                            message={item.message}
                                                            likes={item.likes}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    const addPost = (values: FormDataType) => {
        /*props.addPost(values.newPost)*/
        dispatch(addPostActionCreator(values.newPost))
        values.newPost = ''
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
})