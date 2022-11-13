import axios, { AxiosResponse } from 'axios';
import { ProfileFromServerPropsType } from '../Redux/Reducers/ProfileReducer';

//const baseUrl: string = `https://social-network.samuraijs.com/api/1.0`

const instance = axios.create({
    withCredentials: true,
    data: {},
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': 'c2fb6fdc-8efc-4068-aa85-9235a23b8e79'
    }
})

//APIs
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<void, AxiosResponse<any>>(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userID: number) {
        return instance.post<void, AxiosResponse<any>>(`/follow/${userID}`).then(response => response.data)
    },

    unfollowUser(userID: number) {
        return instance.delete<void, AxiosResponse<any>>(`/follow/${userID}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userID: number) {
        return instance.get<void, AxiosResponse<any>>(`/profile/${userID}`).then(response => response.data)
    },
    getUserStatus(userID: number) {
        return instance.get<void, AxiosResponse<any>>(`/profile/status/${userID}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<string, AxiosResponse<any>>((`/profile/status/`), {status: status})
    },
    setPhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<File, AxiosResponse<ResponseType<SetPhotoResponseType>>>((`/profile/photo/`), formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileFromServerPropsType) {
        return instance.put<ProfileFromServerPropsType, AxiosResponse<any>>(`/profile/`, profile)
    }
}

export const authAPI = {
    getMyProfile() {
        return instance.get<void, AxiosResponse<ResponseType<UserProfileResponseType>>>(`/auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string = '') {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`).then(response => response.data)
    }
}

//types
export type ResponseType<D = {}> = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,

}

type UserProfileResponseType = {
    id: number
    email: string
    login: string
}

type SetPhotoResponseType = {
    photos: {
        small: string
        large: string
    }
}