import * as actionTypes from '../actionTypes';

export const asyncUserDataWatcher = (payload) => ({
    type: actionTypes.ASYNC_USER_DATA_WATCHER,
    payload
});

export const asyncUserDataSuccess = (payload) => ({
    type: actionTypes.ASYNC_USER_DATA_SUCCESS,
    payload
});

export const asyncUserDataError = (payload) => ({
    type: actionTypes.ASYNC_USER_DATA_ERROR,
    payload
});

export const SaveUserDataWatcher = (payload) => ({
    type: actionTypes.SAVE_USER_DATA_WATCHER,
    payload
});

export const SaveUserDataSuccess = (payload) => ({
    type: actionTypes.SAVE_USER_DATA_SUCCESS,
    payload
});

export const SaveUserDataError = (payload) => ({
    type: actionTypes.SAVE_USER_DATA_ERRROR,
    payload
});
// /