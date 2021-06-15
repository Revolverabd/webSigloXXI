import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { authReducerGoogle } from './authReducerGoogle';
import { clientUiReducer } from './clientUiReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    authGoogle: authReducerGoogle,
    clientUi: clientUiReducer
});