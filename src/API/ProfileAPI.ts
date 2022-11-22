import { AxiosResponse } from 'axios';
import { ProfileFromServerPropsType } from '../Redux/Reducers/ProfileReducer';
import { instance, ResponseType } from './API';

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

type SetPhotoResponseType = {
    photos: {
        small: string
        large: string
    }
}