//imports
import { instance } from './API';

//api
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<void, any>(`/security/get-captcha-url`).then(response => response.data)
    }
}

//types
type CaptchaResponseType = {
    url: string
}