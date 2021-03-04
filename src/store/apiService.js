import * as globals from '../utils/globals';

// const res = await AsyncStorage.getItem("userData")
// const parsedData = await JSON.parse(res)
// const token = `Bearer ${parsedData?.token}`

const buildFormData = (url, data, method) => {
    console.log("url=====>", url)
    console.log("data=====>", data)
    const token = `Bearer ${globals.authToken}`
    // console.log(token)
    let headers = {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        "Authorization": token,
    }
    if (method == "get" || method == "GET") {
        return fetch(url, {
            method: 'GET',
            headers,
        }).then((res) => res.json())
    } else {
        return fetch(url, {
            method: 'post',
            headers,
            body: data
        }).then((res) => res.json())
    }
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
export function getArticleDetailsApi(data) {
    // console.log("data", data)

    let url = `${globals.mainUrl + globals.articleDetail}?article_id=${data?.article_id}`
    return buildFormData(url, data, "GET")
}

export function getNotificationApi(data) {
    // console.log("data", data)

    let url = `${globals.mainUrl + globals.notificationList}`
    return buildFormData(url, data, "GET")
}
export function updateNotificationApi(data) {
    return buildFormData(globals.mainUrl + globals.notificationSeen, data)
}

export function trendingArticleApi(data) {
    // console.log("data", data)

    let url = `${globals.mainUrl + globals.trendingArticle}?article_id=${data?.article_id}`
    return buildFormData(url, data, "GET")
}
