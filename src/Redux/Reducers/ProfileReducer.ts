import {v1} from 'uuid';
import {ProfilePagePropsType} from '../../App';
import {profileAPI} from '../../API/API';
import {ThunkDispatchType, ThunkType} from './UsersReducer';
import {stopSubmit} from 'redux-form';

//state
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
        case 'ADD-POST':
            return {
                ...state, myPostsData: [...state.myPostsData,
                    {
                        id: v1(),
                        message: action.newPost,
                        likes: 0
                    }]
            }
        case 'DELETE-POST':
            return {...state, myPostsData: state.myPostsData.filter(el => el.id !== action.postId)}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'SET-PHOTOS': {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
};

//actionCreators
export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost} as const)

export const deletePostActionCreator = (postId: string) => ({type: 'DELETE-POST', postId} as const)

export const setUserProfile = (profile: ProfileFromServerPropsType) => {
    return {type: 'SET-USER-PROFILE', profile} as const;
}
export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const;
}

export const setPhotoAC = (photos: { large: string, small: string }) => ({type: 'SET-PHOTOS', photos} as const)

//thunk creators
export const getUserProfileThunkCreator = (userID: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.getUserProfile(userID)
        dispatch(setUserProfile(response))
    } catch (e) {

    }

}

export const getStatusThunkCreator = (userID: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.getUserStatus(userID)
        dispatch(setStatus(response))
    } catch (e) {

    }

}

export const updateStatusThunkCreator = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {

    }

}

export const setPhotoThunkCreator = (photo: File): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let response = await profileAPI.setPhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoAC(response.data.data.photos))
        }
    } catch (e) {

    }

}

export const saveProfileThunkCreator = (profile: ProfileFromServerPropsType): ThunkType => async (dispatch: ThunkDispatchType, getState) => {
    const userId = getState().authReducer.userID
    try {
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            if (userId) {
                dispatch(getUserProfileThunkCreator(userId.toString()))
            }
            return Promise.resolve(response.data.resultCode)
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common error'
            dispatch(stopSubmit('editProfile', {_error: message}))
            return Promise.reject(response.data.resultCode)
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




