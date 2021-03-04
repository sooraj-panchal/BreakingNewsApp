import * as actionTypes from '../actionTypes';

export const getHomeSliderWatcher = (payload) => ({
    type: actionTypes.HOME_SLIDER_WATCHER, payload
});

export const getHomeSliderSuccess = (payload) => ({
    type: actionTypes.HOME_SLIDER_SUCCESS,
    payload
});
export const getHomeSliderError = (payload) => ({
    type: actionTypes.HOME_SLIDER_ERROR,
    payload
});

export const getHomeCategoryWatcher = (payload) => ({
    type: actionTypes.HOME_CATEGORY_WATCHER,
    payload
});
export const getHomeCategorySuccess = (payload) => ({
    type: actionTypes.HOME_CATEGORY_SUCCESS,
    payload
});
export const getHomeCategoryError = (payload) => ({
    type: actionTypes.HOME_CATEGORY_ERROR,
    payload
});
//
export const getSubCatAllWatcher = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_WATCHER,
    payload
});
export const getSubCatAllSuccess = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_SUCCESS,
    payload
});
export const getSubCatAllError = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_ERROR,
    payload
});
//
export const tokenWatcher = (payload) => ({
    type: actionTypes.TOKEN_WATCHER,
    payload
});
export const tokenSuccess = (payload) => ({
    type: actionTypes.TOKEN_SUCCESS,
    payload
});
export const tokenError = (payload) => ({
    type: actionTypes.TOKEN_ERROR,
    payload
});
// 
export const chatDataWatcher = (payload) => ({
    type: actionTypes.CHAT_DATA_WATCHER,
    payload
});
export const chatDataSuccess = (payload) => ({
    type: actionTypes.CHAT_DATA_SUCCESS,
    payload
});
export const chatDataError = (payload) => ({
    type: actionTypes.CHAT_DATA_ERRROR,
    payload
});
export const sendMessageWatcher = (payload) => ({
    type: actionTypes.SEND_MESSAGE_WATCHER,
    payload
});
export const sendMessageSuccess = (payload) => ({
    type: actionTypes.SEND_MESSAGE_SUCCESS,
    payload
});
export const sendMessageError = (payload) => ({
    type: actionTypes.SEND_MESSAGE_ERRROR,
    payload
});

export const getArticleListWatcher = (payload) => ({
    type: actionTypes.GET_ARTICLE_LIST_WATCHER,
    payload
});
export const getArticleListSuccess = (payload) => ({
    type: actionTypes.GET_ARTICLE_LIST_SUCCESS,
    payload
});
export const getArticleListError = (payload) => ({
    type: actionTypes.GET_ARTICLE_LIST_ERRROR,
    payload
});
////

export const getArticleDetailsWatcher = (payload) => ({
    type: actionTypes.GET_ARTICLE_DETAILS_WATCHER,
    payload
});
export const getArticleDetailsSuccess = (payload) => ({
    type: actionTypes.GET_ARTICLE_DETAILS_SUCCESS,
    payload
});
export const getArticleDetailsError = (payload) => ({
    type: actionTypes.GET_ARTICLE_DETAILS_ERRROR,
    payload
});

////

export const getNotificationWatcher = (payload) => ({
    type: actionTypes.GET_NOTIFICATION_WATCHER,
    payload
});
export const getNotificationSuccess = (payload) => ({
    type: actionTypes.GET_NOTIFICATION_SUCCESS,
    payload
});
export const getNotificationError = (payload) => ({
    type: actionTypes.GET_NOTIFICATION_ERRROR,
    payload
});

////


export const updateNotificationWatcher = (payload) => ({
    type: actionTypes.UPDATE_NOTIFICATION_WATCHER,
    payload
});
export const updateNotificationSuccess = (payload) => ({
    type: actionTypes.UPDATE_NOTIFICATION_SUCCESS,
    payload
});
export const updateNotificationError = (payload) => ({
    type: actionTypes.UPDATE_NOTIFICATION_ERRROR,
    payload
});
///
export const getTrandingImageListWatcher = (payload) => ({
    type: actionTypes.GET_TRANDING_IMAGE_LIST_WATCHER,
    payload
});
export const getTrandingImageListSucces = (payload) => ({
    type: actionTypes.GET_TRANDING_IMAGE_LIST_SUCCESS,
    payload
});
export const getTrandingImageListError = (payload) => ({
    type: actionTypes.GET_TRANDING_IMAGE_LIST_ERROR,
    payload
});

