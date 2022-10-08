import {ThunkDispatchType, ThunkType} from './UsersReducer';
import {authAPI, securityAPI} from '../../API/API';
import {stopSubmit} from 'redux-form';

//initial state
let initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

//reducer
export const authReducer = (state: AuthStateType = initialState, action: AuthReducerActionTypes): AuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.payload}
        case 'SET-CAPTCHA-URL':
            return {...state, captchaUrl: action.payload.captchaUrl}
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

export const setCaptchaUrl = (captchaUrl: string) => {
    return {
        type: 'SET-CAPTCHA-URL',
        payload: {
            captchaUrl
        }
    } as const
}

//thunk creators
export const getMyProfileThunkCreator = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let data = await authAPI.getMyProfile()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: ThunkDispatchType) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getMyProfileThunkCreator())
    }else if(data.resultCode === 10){
        dispatch(getCaptchaUrlThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Common error'
        dispatch(stopSubmit('Login', {_error: message}))
    }
}


export const logoutThunkCreator = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrlThunkCreator = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

//types
export type AuthStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

export type AuthReducerActionTypes = setAuthUserDataType | setCaptchaUrlType

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setCaptchaUrlType = ReturnType<typeof setCaptchaUrl>
