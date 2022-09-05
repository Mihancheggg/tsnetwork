import axios,{AxiosResponse} from 'axios';
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
    updateStatus(status: string){
        return instance.put((`/profile/status/`), {status})
    }
}

export const authAPI = {
    getMyProfile() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}