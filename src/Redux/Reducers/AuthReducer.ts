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
            return {...state, ...action.payload}
        default:
            return state
    }
}


//action creators
export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {
            userID, email, login, isAuth
        }
    } as const
}


//thunk creators
export const getMyProfileThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        authAPI.getMyProfile()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login,true))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getMyProfileThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null,false))
                }
            })
    }
}