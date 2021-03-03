import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { chatDataError, chatDataSuccess, getArticleDetailsError, getArticleDetailsSuccess, getArticleListError, getArticleListSuccess, sendMessageError, sendMessageSuccess } from "../actions/homeAction";
import { chatDataApi, getArticleDetailsApi, getArticleListApi, sendMessageApi } from "../apiService";

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
        yield put(getArticleDetailsError(e));
    }
}

export function* getArticleDetailsSaga() {
    yield takeLatest(actionTypes.GET_ARTICLE_DETAILS_WATCHER, getArticleDetailsActionEffect);
}

