import axios from 'axios';

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
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getMyProfile(){
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },

    getUserProfile(userID: string){
        return instance.get(`/profile/${userID}`).then(response => response.data)
    },

    followUser(userID: number){
        return instance.post(`/follow/${userID}`).then(response => response.data)
    },

    unfollowUser(userID: number){
        return instance.delete(`/follow/${userID}`).then(response => response.data)
    }
}