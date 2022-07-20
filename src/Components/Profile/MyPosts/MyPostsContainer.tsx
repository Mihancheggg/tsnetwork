import React from 'react';
import {ProfilePagePropsType} from '../../../App';
import {
    addPostActionCreator,
    ProfileReducerActionTypes,
    updateNewPostTextActionCreator
} from '../../../Redux/Reducers/ProfileReducer';
import {StoreContext} from '../../../StoreContext';
import {MyPosts} from './MyPosts';
import {ReduxStoreType} from '../../../Redux/ReduxStore';


export type MyPostsContainerDataType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ProfileReducerActionTypes) => void
}

export const MyPostsContainer = (/*props: MyPostsContainerDataType*/) => {

    /*const addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onTextChangeHandler = (text: string) => {
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextActionCreator(text))
    }*/

    return (
        <StoreContext.Consumer>
            {(store: ReduxStoreType) => {

                const profile = store.getState().profileReducer;

                const addPost = () => {
                    //props.addPost()
                    store.dispatch(addPostActionCreator())
                }

                let onTextChangeHandler = (text: string) => {
                    //props.updateNewPostText(text)
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts //profilePage={store.getState().dialogsPageData}
                        myPostsData={profile.myPostsData}
                        newPostText={profile.newPostText}
                        addPost={addPost}
                        updateNewPostText={onTextChangeHandler}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}