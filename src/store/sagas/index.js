import { all } from 'redux-saga/effects';
import { forgotPasswordSaga, loginSaga, registerSaga, resetPasswordSaga, verifyOtpSaga } from './authSaga';
import { chatDataSaga, getArticleDetailsSaga, getArticleListSaga, getNotificationSaga, getTrandingImageListSaga, sendMessageSaga, updateNotificationSaga } from './homeSaga';
import { asyncUserDataSaga, SaveUserDataSaga } from './whiteListSaga';
export default function* rootSaga() {
  yield all([
    loginSaga(),
    verifyOtpSaga(),
    registerSaga(),
    SaveUserDataSaga(),
    forgotPasswordSaga(),
    resetPasswordSaga(),
    asyncUserDataSaga(),
    chatDataSaga(),
    sendMessageSaga(),
    getArticleListSaga(),
    getArticleDetailsSaga(),
    getNotificationSaga(),
    updateNotificationSaga(),
    getTrandingImageListSaga()
  ]);
}
