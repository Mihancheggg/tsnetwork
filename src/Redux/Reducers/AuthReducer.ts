import {ThunkDispatchType, ThunkType} from './UsersReducer';
import {authAPI} from '../../API/API';

export type AuthStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthReducerActionTypes = setAuthUserDataType

type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: AuthStateType = initialState, action: AuthReducerActionTypes): AuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {
            userID, email, login
        }
    } as const
}

export const getMyProfileThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        authAPI.getMyProfile()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}