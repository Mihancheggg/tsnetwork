import axios, {AxiosResponse} from 'axios';
import {ProfileFromServerPropsType} from '../Redux/Reducers/ProfileReducer';

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
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userID: number) {
        return instance.post(`/follow/${userID}`).then(response => response.data)
    },

    unfollowUser(userID: number) {
        return instance.delete(`/follow/${userID}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userID: string) {
        return instance.get(`/profile/${userID}`).then(response => response.data)
    },
    getUserStatus(userID: string) {
        return instance.get(`/profile/status/${userID}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put((`/profile/status/`), {status: status})
    },
    setPhoto(photo: File) {
        let formData = new FormData()
        formData.append('image', photo)
        return instance.put<File, AxiosResponse<ResponseType<SetPhotoResponseType>>>((`/profile/photo/`), formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileFromServerPropsType) {
        return instance.put(`/profile/`, profile)
    }
}

export const authAPI = {
    getMyProfile() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
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
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type SetPhotoResponseType = {
    photos: {
        small: string
        large: string
    }
}