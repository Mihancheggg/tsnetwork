import {v1} from 'uuid';
import {ProfilePagePropsType} from '../App';
import {AddPostActionType, UpdateNewPostTextActionType} from './Store';

export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text};
}

export const profileReducer = (state: ProfilePagePropsType, action: any /*AddPostActionType | UpdateNewPostTextActionType*/) => {
    switch (action.type) {
        case 'ADD-POST':
            state.myPostsData.push({
                id: v1(),
                message: state.newPostText,
                likes: 0
            })
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    };
};

