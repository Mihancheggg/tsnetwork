import {v1} from 'uuid';
import {ProfilePagePropsType} from '../../App';
import {profileAPI} from '../../API/API';
import {ThunkDispatchType, ThunkType} from './UsersReducer';


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

//types
export type ProfileFromServerPropsType = {
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

export type ProfileReducerActionTypes = AddPostActionType
    | setUserProfileType
    | setStatusType
    | DeletePostActionType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type DeletePostActionType = ReturnType<typeof deletePostActionCreator>

export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>

//actionCreators
export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost} as const)
export const deletePostActionCreator = (postId: string) => ({type: 'DELETE-POST', postId} as const)

export const setUserProfile = (profile: ProfileFromServerPropsType) => {
    return {type: 'SET-USER-PROFILE', profile} as const;
}

export const setStatus = (status: string) => {
    return {type: 'SET_STATUS', status} as const;
}

//thunkCreators
export const getUserProfileThunkCreator = (userID: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await profileAPI.getUserProfile(userID)
    dispatch(setUserProfile(response))
}


export const getStatusThunkCreator = (userID: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await profileAPI.getUserStatus(userID)
    dispatch(setStatus(response))
}

export const updateStatusThunkCreator = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

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
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
    ;
};



