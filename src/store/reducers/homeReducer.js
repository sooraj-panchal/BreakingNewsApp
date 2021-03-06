import * as actionTypes from '../actionTypes';

const initialState = {
    data: [],
    error: null,
    isLoading: false,
    chatData: {
        data: null,
        error: null,
        isLoading: false,
    },
    sendMessage: {
        data: null,
        error: null,
        isLoading: false,
    },
    getArticleListReducer: {
        data: null,
        error: null,
        isLoading: false,
    },
    getArticleDetailsReducer: {
        data: null,
        error: null,
        isLoading: false,
    },
    getNotificationReducer: {
        data: null,
        error: null,
        isLoading: false,
    },
    updateNotificationReducer:{
        data: null,
        error: null,
        isLoading: false,
    },
    getTrandingImageListReducer:{
        data: null,
        error: null,
        isLoading: false,
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHAT_DATA_WATCHER:
            return {
                ...state,
                chatData: {
                    data: null,
                    error: null,
                    isLoading: true,
                },
            };
        case actionTypes.CHAT_DATA_SUCCESS:
            return {
                ...state,
                chatData: {
                    data: action.payload,
                    error: null,
                    isLoading: false,
                },
            }
        case actionTypes.CHAT_DATA_ERRROR:
            return {
                ...state,
                chatData: {
                    data: null,
                    error: action.payload,
                    isLoading: false,
                },
            };
        case actionTypes.SEND_MESSAGE_WATCHER:
            return {
                ...state,
                sendMessage: {
                    data: null,
                    error: null,
                    isLoading: true,
                },
            };
        case actionTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                sendMessage: {
                    data: action.payload,
                    error: null,
                    isLoading: false,
                },
            }
        case actionTypes.SEND_MESSAGE_ERRROR:
            return {
                ...state,
                sendMessage: {
                    data: null,
                    error: action.payload,
                    isLoading: false,
                },
            };
            case actionTypes.GET_ARTICLE_LIST_WATCHER:
                return {
                    ...state,
                    getArticleListReducer: {
                        data: null,
                        error: null,
                        isLoading: true,
                    },
                };
            case actionTypes.GET_ARTICLE_LIST_SUCCESS:
                return {
                    ...state,
                    getArticleListReducer: {
                        data: action.payload,
                        error: null,
                        isLoading: false,
                    },
                }
            case actionTypes.GET_ARTICLE_LIST_ERRROR:
                return {
                    ...state,
                    getArticleListReducer: {
                        data: null,
                        error: action.payload,
                        isLoading: false,
                    },
                };
                case actionTypes.GET_ARTICLE_DETAILS_WATCHER:
                    return {
                        ...state,
                        getArticleDetailsReducer: {
                            data: null,
                            error: null,
                            isLoading: true,
                        },
                    };
                case actionTypes.GET_ARTICLE_DETAILS_SUCCESS:
                    return {
                        ...state,
                        getArticleDetailsReducer: {
                            data: action.payload,
                            error: null,
                            isLoading: false,
                        },
                    }
                case actionTypes.GET_ARTICLE_DETAILS_ERRROR:
                    return {
                        ...state,
                        getArticleDetailsReducer: {
                            data: null,
                            error: action.payload,
                            isLoading: false,
                        },
                    };
                    case actionTypes.GET_NOTIFICATION_WATCHER:
                    return {
                        ...state,
                        getNotificationReducer: {
                            data: null,
                            error: null,
                            isLoading: true,
                        },
                    };
                case actionTypes.GET_NOTIFICATION_SUCCESS:
                    return {
                        ...state,
                        getNotificationReducer: {
                            data: action.payload,
                            error: null,
                            isLoading: false,
                        },
                    }
                case actionTypes.GET_NOTIFICATION_ERRROR:
                    return {
                        ...state,
                        getNotificationReducer: {
                            data: null,
                            error: action.payload,
                            isLoading: false,
                        },
                    };
                    case actionTypes.UPDATE_NOTIFICATION_WATCHER:
                        return {
                            ...state,
                            updateNotificationReducer: {
                                data: null,
                                error: null,
                                isLoading: true,
                            },
                        };
                    case actionTypes.UPDATE_NOTIFICATION_SUCCESS:
                        return {
                            ...state,
                            updateNotificationReducer: {
                                data: action.payload,
                                error: null,
                                isLoading: false,
                            },
                        }
                    case actionTypes.UPDATE_NOTIFICATION_ERRROR:
                        return {
                            ...state,
                            updateNotificationReducer: {
                                data: null,
                                error: action.payload,
                                isLoading: false,
                            },
                        };
                        case actionTypes.GET_TRANDING_IMAGE_LIST_WATCHER:
                            return {
                                ...state,
                                getTrandingImageListReducer: {
                                    data: null,
                                    error: null,
                                    isLoading: true,
                                },
                            };
                        case actionTypes.GET_TRANDING_IMAGE_LIST_SUCCESS:
                            return {
                                ...state,
                                getTrandingImageListReducer: {
                                    data: action.payload,
                                    error: null,
                                    isLoading: false,
                                },
                            }
                        case actionTypes.GET_TRANDING_IMAGE_LIST_ERROR:
                            return {
                                ...state,
                                getTrandingImageListReducer: {
                                    data: null,
                                    error: action.payload,
                                    isLoading: false,
                                },
                            };
        // case actionTypes.HOME_SLIDER_WATCHER:
        //     return {
        //         ...state,
        //         isLoading: true,
        //     };
        // case actionTypes.HOME_SLIDER_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         data: action.payload
        //     }
        // case actionTypes.HOME_SLIDER_ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.payload
        //     };


        // case actionTypes.HOME_CATEGORY_WATCHER:
        //     return {
        //         ...state,
        //         homeCategory: {
        //             data: [],
        //             error: null,
        //             isLoading: true,
        //         },
        //     };
        // case actionTypes.HOME_CATEGORY_SUCCESS:
        //     return {
        //         ...state,
        //         homeCategory: {
        //             data: action.payload,
        //             error: null,
        //             isLoading: false,
        //         },
        //     }
        // case actionTypes.HOME_CATEGORY_ERROR:
        //     return {
        //         ...state,
        //         homeCategory: {
        //             data: null,
        //             error: action.payload,
        //             isLoading: false,
        //         },
        //     };

        // case actionTypes.SUB_CATEGORY_ALL_WATCHER:
        //     return {
        //         ...state,
        //         subCatAll: {
        //             data: [],
        //             error: null,
        //             isLoading: true,
        //         },
        //     };
        // case actionTypes.SUB_CATEGORY_ALL_SUCCESS:
        //     return {
        //         ...state,
        //         subCatAll: {
        //             data: action.payload,
        //             error: null,
        //             isLoading: false,
        //         },
        //     }
        // case actionTypes.SUB_CATEGORY_ALL_ERROR:
        //     return {
        //         ...state,
        //         subCatAll: {
        //             data: null,
        //             error: action.payload,
        //             isLoading: false,
        //         },
        //     };
        default:
            return state;
    }
};
