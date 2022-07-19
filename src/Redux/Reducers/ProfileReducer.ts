import {v1} from 'uuid';
import {ProfilePagePropsType} from '../../App';

let initialState = {
    myPostsData: [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 8},
        {id: v1(), message: 'It is my second post', likes: 19},
        {id: v1(), message: 'It is my first post', likes: 15}
    ],
    newPostText: '',
};

export type ProfileReducerActionTypes = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>


export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const;
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileReducerActionTypes) => {
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
            return {...state, newPostText: action.newText}
        default:
            return state
    }
    ;
};

