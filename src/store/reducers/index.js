import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';
// import homeReducer from './homeReducer';
// import mapReducer from './mapReducer';
// import orderReducer from './orderReducer';
// import paymentReducer from './paymentReducer';
// import productCountReducer from './productCountReducer';
// import productReducer from './productReducer';
// import profileReducer from './profileReducer';
import whiteListReducer from './whiteListReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    // homeReducer,
    whiteListReducer,
    authReducer,
    homeReducer
});
