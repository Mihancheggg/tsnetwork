import React from 'react';
import {ProfilePagePropsType} from '../../../App';
import {addPostActionCreator} from '../../../Redux/Reducers/ProfileReducer';
//import {StoreContext} from '../../../StoreContext';
import {MyPosts} from './MyPosts';
import {AppPropsType} from '../../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';

export type MyPostsContainerDataType = ProfilePagePropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}

/*
export const MyPostsContainer = (/!*props: MyPostsContainerDataType*!/) => {

    /!*const addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onTextChangeHandler = (text: string) => {
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextActionCreator(text))
    }*!/

    return (
        /!*<StoreContext.Consumer>
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
        </StoreContext.Consumer>*!/
        <></>
    )
}*/

let mapStateToProps = (state: AppPropsType): ProfilePagePropsType => {
    return {
        myPostsData: state.profileReducer.myPostsData,
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
}


//export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export const MyPostsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)
