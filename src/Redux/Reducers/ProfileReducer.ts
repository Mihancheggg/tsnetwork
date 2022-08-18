import {v1} from 'uuid';
import {ProfilePagePropsType} from '../../App';
import {usersAPI} from '../../API/API';
import {ThunkDispatchType, ThunkType} from './UsersReducer';

export type ProfileFromServerPropsType ={
    aboutMe?: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small?: string,
        large?: string
    }
}

let initialState: ProfilePagePropsType = {
    myPostsData: [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 8},
        {id: v1(), message: 'It is my second post', likes: 19},
        {id: v1(), message: 'It is my first post', likes: 15}
    ],
    newPostText: '',
    profile: null
};

export type ProfileReducerActionTypes = AddPostActionType | UpdateNewPostTextActionType | setUserProfileType

type AddPostActionType = ReturnType<typeof addPostActionCreator>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type setUserProfileType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const;
}

export const setUserProfile = (profile: ProfileFromServerPropsType) => {
    return {type: 'SET-USER-PROFILE', profile} as const;
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
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    };
};

export const getUserProfileThunkCreator = (userID: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        usersAPI.getUserProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

