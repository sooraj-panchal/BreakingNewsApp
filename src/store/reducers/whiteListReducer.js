import * as actionTypes from '../actionTypes';

const initialState = {
    data: null,
    error: null,
    isLoading: false,
    asyncUserData: {
        data: null,
        error: null,
        isLoading: false
    },
    saveUserData:{
        data: null,
        error: null,
        isLoading: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ASYNC_USER_DATA_WATCHER:
            return {
                ...state,
                asyncUserData: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.ASYNC_USER_DATA_SUCCESS:
            return {
                ...state,
                asyncUserData: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.ASYNC_USER_DATA_ERROR:
            return {
                ...state,
                asyncUserData: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
            case actionTypes.SAVE_USER_DATA_WATCHER:
                return {
                    ...state,
                    saveUserData: {
                        data: null,
                        error: null,
                        isLoading: true
                    },
                };
            case actionTypes.SAVE_USER_DATA_SUCCESS:
                return {
                    ...state,
                    saveUserData: {
                        data: action.payload,
                        error: null,
                        isLoading: false
                    }
                };
            case actionTypes.SAVE_USER_DATA_ERRROR:
                return {
                    ...state,
                    saveUserData: {
                        data: null,
                        error: action.payload,
                        isLoading: false
                    }
                };
        default:
            return state;
    }
};
