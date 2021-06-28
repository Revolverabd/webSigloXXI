import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { authReducerGoogle } from './authReducerGoogle';
import { clientUiReducer } from './clientUiReducer';
import { diningUiReducer } from './diningUiReducer';
import { TableStatusUiReducer } from './TableStatusUiReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    authGoogle: authReducerGoogle,
    clientUi: clientUiReducer,
    diningRoom: diningUiReducer,
    tableStatus: TableStatusUiReducer
});