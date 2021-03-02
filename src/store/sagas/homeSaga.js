import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { chatDataError, chatDataSuccess, getArticleListError, getArticleListSuccess, sendMessageError, sendMessageSuccess } from "../actions/homeAction";
import { chatDataApi, getArticleListApi, sendMessageApi } from "../apiService";

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