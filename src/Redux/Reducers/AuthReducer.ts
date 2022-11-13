import {ThunkDispatchType, ThunkType} from './UsersReducer';
import { authAPI, ResultCodesEnum, securityAPI } from '../../API/API';
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
    try {
        let data = await authAPI.getMyProfile()
        if (data.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    } catch (e) {

    }

}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getMyProfileThunkCreator())
        } else {
            if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrlThunkCreator())
            }
            let message = data.messages.length > 0 ? data.messages[0] : 'Common error'
            dispatch(stopSubmit('Login', {_error: message}))
        }
    } catch (e) {

    }

}

export const logoutThunkCreator = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await authAPI.logout()
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (e) {

    }

}

export const getCaptchaUrlThunkCreator = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let data = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.url
        dispatch(setCaptchaUrl(captchaUrl))
    } catch (e) {

    }

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
