import SHOP_DATA from './shop-data';
const INITIAL_STATE = {
    shop:SHOP_DATA
}

const shopeducers = (state = INITIAL_STATE,action) =>  {
    switch(action.type) {
        default:return state
    }
}
export default shopeducers;