/*All the user related data 
    is maintained by the user redux
*/
import {userActionTypes} from './user.Types';
const INITIAL_STATE  = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE,action ) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER : return {
            ...state,
            currentUser:action.payload
        }
        default : return state;
    }
}

export default userReducer;
