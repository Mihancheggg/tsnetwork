//imports
import { AxiosResponse } from 'axios';
import { ProfileFromServerPropsType } from '../Redux/Reducers/ProfileReducer';
import { instance, ResponseType } from './API';

//api
export const profileAPI = {
    getUserProfile(userID: number) {
        return instance.get<void, AxiosResponse<ProfileFromServerPropsType>>(`/profile/${userID}`)
            .then(response => response.data)
    },
    getUserStatus(userID: number) {
        return instance.get<void, AxiosResponse<string>>(`/profile/status/${userID}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<string, AxiosResponse<ResponseType>>((`/profile/status/`), {status: status})
            .then(response => response.data)
    },
    setPhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<File, AxiosResponse<ResponseType<SetPhotoResponseType>>>((`/profile/photo/`), formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response.data)
    },
    saveProfile(profile: ProfileFromServerPropsType) {
        return instance.put<ProfileFromServerPropsType, AxiosResponse<ResponseType>>(`/profile/`, profile)
            .then(response => response.data)
    }
}


//types
type SetPhotoResponseType = {
    photos: {
        small: string
        large: string
    }
}