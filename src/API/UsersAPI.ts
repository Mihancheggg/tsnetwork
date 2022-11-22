//imports
import { AxiosResponse } from 'axios';
import { instance, ResponseType } from './API';
import { UserType } from '../Redux/Reducers/UsersReducer';

//api
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<void, AxiosResponse<GetUsersResponseType>>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userID: number) {
        return instance.post<void, AxiosResponse<ResponseType>>(`/follow/${userID}`)
            .then(response => response.data)
    },

    unfollowUser(userID: number) {
        return instance.delete<void, AxiosResponse<ResponseType>>(`/follow/${userID}`)
            .then(response => response.data)
    }
}

//types
type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}