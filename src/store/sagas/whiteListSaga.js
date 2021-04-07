import { put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { asyncUserDataError, asyncUserDataSuccess, SaveUserDataError, SaveUserDataSuccess } from "../actions";


function* asyncUserDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        console.log("=====>asyncUserDataSuccess ", action.payload)
        yield put(asyncUserDataSuccess(action.payload))
    } catch (e) {
        console.log("=====>asyncUserDataError", e)
        globals.toastMessage = JSON.stringify(e)

        yield put(asyncUserDataError(e));
    }
}

export function* asyncUserDataSaga() {
    yield takeLatest(actionTypes.ASYNC_USER_DATA_WATCHER, asyncUserDataActionEffect);
}


function* saveUserDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    alert("variable=========>", JSON.stringify(action))
    try {
        console.log("=====>SaveUserDataSuccess ", action.payload)
        yield put(SaveUserDataSuccess(action.payload))
    } catch (e) {
        console.log("=====>SaveUserDataError", e)
        yield put(SaveUserDataError(e));
    }
}

export function* SaveUserDataSaga() {
    yield takeLatest(actionTypes.SAVE_USER_DATA_WATCHER, saveUserDataActionEffect);
}