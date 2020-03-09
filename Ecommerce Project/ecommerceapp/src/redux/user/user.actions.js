// Creating the user action
import {userActionTypes} from './user.Types';
export const setCurrentUser = (user) => ({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
});