import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { chatDataError, chatDataSuccess, getArticleDetailsError, getArticleDetailsSuccess, getArticleListError, getArticleListSuccess, getNotificationError, getNotificationSuccess, getNotificationWatcher, getTrandingImageListError, getTrandingImageListSucces, sendMessageError, sendMessageSuccess, updateNotificationError, updateNotificationSuccess } from "../actions/homeAction";
import { chatDataApi, getArticleDetailsApi, getArticleListApi, getNotificationApi, sendMessageApi, trendingArticleApi, updateNotificationApi } from "../apiService";

function* chatDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(chatDataApi, action.payload);
        console.log("======>chatDataApi success ", response)
        yield put(chatDataSuccess(response));
    } catch (e) {
        console.log("=====>chatDataApi Error", e)
        globals.toastMessage = JSON.stringify(e)
        yield put(chatDataError(e));
    }
}

export function* chatDataSaga() {
    yield takeLatest(actionTypes.CHAT_DATA_WATCHER, chatDataActionEffect);
}


function* sendMessageActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(sendMessageApi, action.payload);
        console.log("======>sendMessageApi success ", response)
        yield put(sendMessageSuccess(response));
    } catch (e) {
        console.log("=====>sendMessageApi Error", e)
        globals.toastMessage = JSON.stringify(e)
        yield put(sendMessageError(e));
    }
}

export function* sendMessageSaga() {
    yield takeLatest(actionTypes.SEND_MESSAGE_WATCHER, sendMessageActionEffect);
}


function* getArticleListActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getArticleListApi, action.payload);
        console.log("======>getArticleListApi success ", response)
        yield put(getArticleListSuccess(response));
    } catch (e) {
        console.log("=====>getArticleListApi Error", e)
        globals.toastMessage = JSON.stringify(e)
        yield put(getArticleListError(e));
    }
}

export function* getArticleListSaga() {
    yield takeLatest(actionTypes.GET_ARTICLE_LIST_WATCHER, getArticleListActionEffect);
}

function* getArticleDetailsActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getArticleDetailsApi, action.payload);
        console.log("======>getArticleDetailsApi success ", response)
        yield put(getArticleDetailsSuccess(response));
    } catch (e) {
        console.log("=====>getArticleDetailsApi Error", e)
        globals.toastMessage = JSON.stringify(e)

        yield put(getArticleDetailsError(e));
    }
}

export function* getArticleDetailsSaga() {
    yield takeLatest(actionTypes.GET_ARTICLE_DETAILS_WATCHER, getArticleDetailsActionEffect);
}

function* getNotificationActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getNotificationApi, action.payload);
        console.log("======>getNotificationApi success ", response)
        yield put(getNotificationSuccess(response));
    } catch (e) {
        console.log("=====>getNotificationApi Error", e)
        globals.toastMessage = JSON.stringify(e)

        yield put(getNotificationError(e));
    }
}

export function* getNotificationSaga() {
    yield takeLatest(actionTypes.GET_NOTIFICATION_WATCHER, getNotificationActionEffect);
}

function* updateNotificationActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(updateNotificationApi, action.payload);
        console.log("======>updateNotificationApi success ", response)
        yield put(updateNotificationSuccess(response));
        // yield put(getNotificationWatcher());
    } catch (e) {
        console.log("=====>updateNotificationApi Error", e)
        globals.toastMessage = JSON.stringify(e)

        yield put(updateNotificationError(e));
    }
}

export function* updateNotificationSaga() {
    yield takeLatest(actionTypes.UPDATE_NOTIFICATION_WATCHER, updateNotificationActionEffect);
}

function* getTrandingImageListActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(trendingArticleApi, action.payload);
        console.log("======>trendingArticleApi success ", response)
        yield put(getTrandingImageListSucces(response));
    } catch (e) {
        console.log("=====>trendingArticleApi Error", e)
        globals.toastMessage = JSON.stringify(e)

        yield put(getTrandingImageListError(e));
    }
}

export function* getTrandingImageListSaga() {
    yield takeLatest(actionTypes.GET_TRANDING_IMAGE_LIST_WATCHER, getTrandingImageListActionEffect);
}

