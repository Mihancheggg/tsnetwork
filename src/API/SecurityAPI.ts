import { instance } from './API';

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`).then(response => response.data)
    }
}