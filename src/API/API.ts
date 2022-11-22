import axios from 'axios';

//const baseUrl: string = `https://social-network.samuraijs.com/api/1.0`

export const instance = axios.create({
    withCredentials: true,
    data: {},
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': 'c2fb6fdc-8efc-4068-aa85-9235a23b8e79'
    }
})

//common types
export type ResponseType<D = {}> = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}