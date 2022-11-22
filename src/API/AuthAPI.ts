//imports
import { AxiosResponse } from 'axios';
import { instance, ResponseType } from './API';

//api
export const authAPI = {
    getMyProfile() {
        return instance.get<void, AxiosResponse<ResponseType<UserProfileResponseType>>>(`/auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string = '') {
        return instance.post<LoginRequestType, AxiosResponse<ResponseType<LoginResponseType>>>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(response => response.data)
    },
    logout() {
        return instance.delete<void, AxiosResponse<ResponseType>>(`/auth/login`)
            .then(response => response.data)
    }
}

//types
type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

type LoginResponseType = {
    userId: number
}

type UserProfileResponseType = {
    id: number
    email: string
    login: string
}