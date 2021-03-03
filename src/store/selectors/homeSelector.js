import { createSelector } from 'reselect';

const homeReducer = state => state.homeReducer;
// const whiteListReducer = state => state.whiteListReducer;

export const chatDataSelector = createSelector(
    homeReducer,
    chatDataSelector => chatDataSelector.chatData.data,
);
export const chatDataLoading = createSelector(
    homeReducer,
    chatDataLoading => chatDataLoading.chatData.isLoading
);

export const sendMessageSelector = createSelector(
    homeReducer,
    sendMessageSelector => sendMessageSelector.sendMessage.data,
);
export const sendMessageLoading = createSelector(
    homeReducer,
    sendMessageLoading => sendMessageLoading.sendMessage.isLoading
);
////
export const getArticeListSelector = createSelector(
    homeReducer,
    getArticeListSelector => getArticeListSelector.getArticleListReducer.data,
);
export const getArticeListLoading = createSelector(
    homeReducer,
    getArticeListLoading => getArticeListLoading.getArticleListReducer.isLoading
);
export const getArticleDetailsSelector = createSelector(
    homeReducer,
    getArticleDetailsSelector => getArticleDetailsSelector.getArticleDetailsReducer.data,
);
export const getArticleDetailsLoading = createSelector(
    homeReducer,
    getArticleDetailsLoading => getArticleDetailsLoading.getArticleDetailsReducer.isLoading
);
// export const getHomeSliderSelector = createSelector(
//     homeReducer,
//     sliderImage => sliderImage.data,
// );

// export const getHomeCategorySelector = createSelector(
//     homeReducer,
//     homeCategory => homeCategory.homeCategory.data,
// );
// export const getHomeCategoryLoading = createSelector(
//     homeReducer,
//     isLoading => isLoading.homeCategory.isLoading
// );

// export const getSubCatAllSelector = createSelector(
//     homeReducer,
//     subCatAll => subCatAll.subCatAll.data,
// );
// //
// export const tokenSelector = createSelector(
//     whiteListReducer,
//     tokenSelector => tokenSelector.tokenReducer.data,
// );
// export const tokenLoading = createSelector(
//     whiteListReducer,
//     tokenLoading => tokenLoading.tokenReducer.isLoading
// );


