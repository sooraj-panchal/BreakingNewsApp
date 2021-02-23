import { createSelector } from 'reselect';

const whiteListReducer = state => state.whiteListReducer;

export const asyncUserDataSelector = createSelector(
    whiteListReducer,
    asyncUserDataSelector => asyncUserDataSelector.asyncUserData.data,
);
export const asyncUserDataLoading = createSelector(
    whiteListReducer,
    asyncUserDataLoading => asyncUserDataLoading.asyncUserData.isLoading
);

export const saveUserDataSelector = createSelector(
    whiteListReducer,
    saveUserDataSelector => saveUserDataSelector.saveUserData.data,
);
export const saveUserDataLoading = createSelector(
    whiteListReducer,
    saveUserDataLoading => saveUserDataLoading.saveUserData.isLoading
);
