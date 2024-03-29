//imports
import { v1 } from 'uuid';
import { ProfilePagePropsType } from '../../App';
import { ResultCodesEnum } from '../../API/API';
import { ThunkDispatchType, ThunkType } from './UsersReducer';
import { stopSubmit } from 'redux-form';
import { profileAPI } from '../../API/ProfileAPI';

//initial state
let initialState: ProfilePagePropsType = {
    myPostsData: [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 8},
        {id: v1(), message: 'It is my second post', likes: 19},
        {id: v1(), message: 'It is my first post', likes: 15}
    ],
    profile: null,
    status: ''
};

//reducer
export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileReducerActionTypes): ProfilePagePropsType => {
    switch (action.type) {
        case 'TSN/PROFILE/ADD_POST':
            return {
                ...state, myPostsData: [...state.myPostsData,
                    {
                        id: v1(),
                        message: action.newPost,
                        likes: 0
                    }]
            }
        case 'TSN/PROFILE/DELETE_POST':
            return {...state, myPostsData: state.myPostsData.filter(el => el.id !== action.postId)}
        case 'TSN/PROFILE/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'TSN/PROFILE/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'TSN/PROFILE/SET_PHOTOS': {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
};

//action creators
export const addPostActionCreator = (newPost: string) => ({type: 'TSN/PROFILE/ADD_POST', newPost} as const)

export const deletePostActionCreator = (postId: string) => ({type: 'TSN/PROFILE/DELETE_POST', postId} as const)

export const setUserProfile = (profile: ProfileFromServerPropsType) => {
    return {type: 'TSN/PROFILE/SET_USER_PROFILE', profile} as const;
}

export const setStatus = (status: string) => {
    return {type: 'TSN/PROFILE/SET_STATUS', status} as const;
}

export const setPhotoAC = (photos: { large: string, small: string }) => ({
    type: 'TSN/PROFILE/SET_PHOTOS',
    photos
} as const)

//thunk creators
export const getUserProfileThunkCreator = (userID: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.getUserProfile(userID)
        dispatch(setUserProfile(response))
    } catch (e) {

    }
}

export const getStatusThunkCreator = (userID: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.getUserStatus(userID)
        dispatch(setStatus(response))
    } catch (e) {

    }
}

export const updateStatusThunkCreator = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setStatus(status))
        }
    } catch (e) {

    }
}

export const setPhotoThunkCreator = (photo: File): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await profileAPI.setPhoto(photo)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setPhotoAC(data.data.photos))
        }
    } catch (e) {

    }
}

export const saveProfileThunkCreator = (profile: ProfileFromServerPropsType): ThunkType => async (dispatch: ThunkDispatchType, getState) => {
    const userId = getState().authReducer.userID
    try {
        let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === ResultCodesEnum.Success) {
            if (userId) {
                dispatch(getUserProfileThunkCreator(userId))
            }
            return Promise.resolve(data.resultCode)
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Common error'
            dispatch(stopSubmit('editProfile', {_error: message}))
            return Promise.reject(data.resultCode)
        }
    } catch (e) {

    }
}

//types
export type ProfileFromServerPropsType = {
    aboutMe: string
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
        large?: string,
        small?: string,
    }
}

export type GetStringKeys<T> = Extract<keyof T, string>

export type ProfileReducerActionTypes = AddPostActionType
    | setUserProfileType
    | setStatusType
    | DeletePostActionType
    | setPhotoACType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type DeletePostActionType = ReturnType<typeof deletePostActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>
export type setPhotoACType = ReturnType<typeof setPhotoAC>




