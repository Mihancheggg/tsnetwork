import React from 'react';
import {ProfilePagePropsType} from '../../../App';
import {
    addPostActionCreator,
    ProfileReducerActionTypes,
    updateNewPostTextActionCreator
} from '../../../Redux/Reducers/ProfileReducer';
import {MyPosts} from './MyPosts';


export type MyPostsContainerDataType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ProfileReducerActionTypes) => void
}

export const MyPostsContainer = (props: MyPostsContainerDataType) => {

    const addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onTextChangeHandler = (text: string) => {
            //props.updateNewPostText(text)
            props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts profilePage={props.profilePage} addPost={addPost} updateNewPostText={onTextChangeHandler}/>
    )
}