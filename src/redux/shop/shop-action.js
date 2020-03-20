import ShopactionTypes from "./shop-type"

export const updateCollection = (collectionItem) => ({
    type:ShopactionTypes.UPDATE_SHOP_DATA,
    payload:collectionItem
})