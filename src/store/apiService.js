import * as globals from '../utils/globals';

const buildFormData = (url, data) => {
    console.log("url=====>", url)
    console.log("data=====>", data)
    const token = `Bearer ${globals.authToken}`
    // console.log(token)
    return fetch(url, {
        method: 'post',
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            "Authorization": token,
        },
        body: data
    }).then((res) => res.json())
}

export function registerApi(data) {
    return buildFormData(globals.mainUrl + globals.registerUser, data)
}

export function loginApi(data) {
    return buildFormData(globals.mainUrl + globals.loginUser, data)
}

export function verifyOtpApi(data) {
    return buildFormData(globals.mainUrl + globals.otp_verify, data)
}
export function forgotPasswordApi(data) {
    return buildFormData(globals.mainUrl + globals.forgotPassword, data)
}
export function resetPasswordApi(data) {
    return buildFormData(globals.mainUrl + globals.Resetpassword, data)
}

export function chatDataApi(data) {
    return buildFormData(globals.mainUrl + globals.chatData, data)
}
export function sendMessageApi(data) {
    return buildFormData(globals.mainUrl + globals.sendMessage, data)
}

export function getArticleListApi(data) {
    return buildFormData(globals.mainUrl + globals.articleData, data)
}