import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    userLoginReducer 
} from './Reducers/UserAuthReducer/UserLoginReducer';

import { 
    sendRecoveryEmailReducer,
    sendRecoveryEmailAndOtpReducer,  
    resetPasswordReducer,
} from './Reducers/ResetPassReducers/ResetPassReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    recoveryEmailStatus: sendRecoveryEmailReducer,
    recoveryEmailAndOtpStatus: sendRecoveryEmailAndOtpReducer,
    passwordReset: resetPasswordReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;