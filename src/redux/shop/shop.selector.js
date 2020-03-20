import {createSelector} from 'reselect';

// Each item name is map to the respective id for getting all the items related to it


// input selector
const shopSelector = (state) => state.shop;

// output selctor
export const selectShopItems = createSelector(
    [shopSelector],
    (shopData) => shopData.shopData
)
// For getting the data for 'search route'
export const collectionItemSelectorForPreview = createSelector (
    [selectShopItems],
    collections => collections ? (Object.keys(collections).map(key => collections[key])) :[]
) 
// Get the data from depending upon the urlparameter
export const collectionItemSelector = (collectionUrlParam) => createSelector (
    [selectShopItems],
    collections => collections ? (collections[collectionUrlParam]) : null
)