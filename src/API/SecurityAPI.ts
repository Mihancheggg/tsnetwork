//imports
import { instance } from './API';
import { AxiosResponse } from 'axios';

//api
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<void, AxiosResponse<CaptchaResponseType>>(`/security/get-captcha-url`).then(response => response.data)
    }
}

//types
type CaptchaResponseType = {
    url: string
}