import { combineReducers } from 'redux';

import usersReducer from '../features/users/usersSlice';
import settingsReducer from '../features/settings/settingsSlice';

export default combineReducers({
    settings: settingsReducer,
    users: usersReducer,
});
