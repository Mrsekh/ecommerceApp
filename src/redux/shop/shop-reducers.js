// import SHOP_DATA from './shop-data';
import ShopactionTypes from './shop-type';
const INITIAL_STATE = {
    shop:null
}

const shopreducers = (state = INITIAL_STATE,action) =>  {
    
    switch(action.type) {
        case ShopactionTypes.UPDATE_SHOP_DATA : return {
            ...state,
            shopData:action.payload
        };
        default:return state
    }
}
export default shopreducers;