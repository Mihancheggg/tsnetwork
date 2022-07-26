import {v1} from 'uuid';
import {ProfilePagePropsType} from '../../App';

let initialState: ProfilePagePropsType = {
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

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileReducerActionTypes): ProfilePagePropsType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state, myPostsData: [...state.myPostsData,
                    {
                        id: v1(),
                        message: state.newPostText,
                        likes: 0
                    }], newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }
    ;
};

